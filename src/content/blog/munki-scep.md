---
title: "Creating a SCEP service for Munki using MicroMDM's SCEP Project"
description: 'Lorem ipsum dolor sit amet'
pubDate: 'August 3 2017'
heroImage: '/blog-placeholder-3.jpg'
---

# The Story
Recently I was tasked with using migrating a [Munki](https://github.com/munki/munki) repository to use SSL and to be accessible external to an organization. Since at it's simplest, Munki is just some folders accessible over http, and most supporting services for it are LAMP or LNMP stacks, this is pretty simple. The harder part is running client verifications. You can use a pre-shared key, though scripting that implies every machine use the same key, or has something on the server communicating with the client to provide a unique htpasswd entry for each machine. You could choose to not verify your clients as well. The final option is to secure it using SSL client certificates. That is the option I chose. 

There are two common methods I know of for getting Client certificates to endpoints. They are sneakernet and Simple Client Enrollment Protocol, or SCEP. Sneakernet doesn't scale well beyond a handful of machines, so SCEP it is.
The first step with SCEP was to identify which SCEP service to use. Active Directory Certificate Services would be my first choice, given my environment has a very large AD deployment. Unfortunately that doesn't appear to be offered. After looking I came to three solutions. Dogtag, originally an AOL project that has since been rolled into FreeIPA, OpenXPKI, an old project without packaging for my distribution of Linux, and the SCEP component of the MicroMDM project. Even though I needed to compile it, I went with the SCEP component of the MicroMDM project because it was the simplest of the solutions, with the least overhead and extra features I didn't need. @groob will be adding a CI component to the [micromdm/scep](https://github.com/micromdm/scep) project soon, so the manual compilation can be replaced with a docker container in the future.

Since that docker container doesn't work yet, the first thing when configuring SCEP was to figure out how to compile it, then configure it, then secure it.

# The steps
#### Compiling
1. Create the $GOPATH variable in your shell for go to use.
 * `export GOPATH=~/Projects/GoProjects`
2. Install the Go compiler.
 * `apt install golang`
 * `brew install go`
 * `yum install golang`
3. Install [Glide](https://github.com/Masterminds/glide) for dependency resolution. Glide is the Go equivalent to pip, cpan, or npm.
 * curl https://glide.sh/get | sh
4. Install the dependancies
 * `cd $GOPATH/src/github.com/micromdm/scep/`
 * `glide install`
5. Compile the client or server binary. Note that you will have to compile the client and server separately on each OS you plan to run it on
 * cd `$GOPATH/src/github.com/micromdm/scep/cmd/scepserver`
 * `go build`

#### Server
1. Place the binary in a useful location
 * `cp scepserver /usr/sbin`
2. Create the depot for the server to store the certificate information in
 * `mkdir -p /var/lib/scep/depot`
 * `cd /var/lib/scep/depot; scepserver -ca init`
  * This should be run with some more flags as provided by the [micromdm/scep](https://github.com/micromdm/scep) documentation.
3. I'm running the server on Ubuntu 16.04, so I have systemd available. I wrote a systemd file similar to this one for so systemd could start and stop the service automatically. This should be modified to include a `-challenge` to suit your environment.
```
    [Unit]
    Description=Micromdm SCEP Server
    After=syslog.target network.target
    [Service]
    Type=simple
    ExecStart=/usr/sbin/scepserver -depot /var/lib/scep/depot
    Restart=always
    [Install]
    WantedBy=multi-user.target
```
That should get the server running on port 8080 at `https://localhost:8080/scep`. I use a proxy rule in apache to accept requests over https made to /scep and pass them to the scep server. 
`ProxyPass /scep http://localhost:8080/scep`

I also have a block into the config that adds support to apache for this

```
	SSLCACertificateFile    /var/lib/scep/depot/ca.pem
	<Directory /var/www/munki_repo>
		Options -Indexes
		# Make Client auth optional while internal
		SSLVerifyClient optional
		Require ip 172.16.0.0/12
		Satisfy any
	</Directory>
``` 

Next is the client. 

#### Client
1. Compile the client
 * `$GOPATH/src/github.com/micromdm/scep/cmd/scepclient`
 * `go build`
2. Place the binary in a useful location
 * `cp scepclient /usr/local/sbin`
3. Write a script that makes a SCEP request using your freshly compiled client. I package the script, the public CA, and the client up and install them at image time, placing the script in the munki preflight.d directory installed by munkireport-php, the client in `/usr/local/sbin/`, and the cert in `/Library Managed Installs/certs`
```bash
#!/usr/bin/env bash

HOSTNAME=`scutil --get ComputerName`.company.fqdn
SCEP_URL="http://scepserver.company.fqdn/scep" # Your scep server here
ORGANIZATION="Your Org Here" # This should match what you created the CA certificate with
MUNKI_CERT_DIR="/Library/Managed Installs/certs"
CERT_STATUS=255

do_scep_request() {
    echo "Generating Client SSL Certificate"
    /usr/local/sbin/scepclient -private-key ./client.key -server-url $SCEP_URL -organization $ORGANIZATION -cn $HOSTNAME

    echo "Modifying certifcate"
    cat ./client.key >> ./client.pem

    echo "Installing Certificate to munki folder"
    cp ./client.key "$MUNKI_CERT_DIR"
    cp ./client.pem "$MUNKI_CERT_DIR"

    echo "Importing SCEP CA"
    sudo security add-trusted-cert -d -r trustRoot -k "/Library/Keychains/System.keychain" "$MUNKI_CERT_DIR"/ca.pem

    echo "Done"
    exit 0
}

if [ ! -f "$MUNKI_CERT_DIR"/client.pem ]; then
    echo "File doesn't exist"
    do_scep_request
else
    openssl x509 -noout -checkend 1209600 -in "$MUNKI_CERT_DIR"/client.pem
    STATUS=$?
    if [ $STATUS -ne 0 ]; then
        echo $STATUS
        echo "file exists and is expiring"
        do_scep_request
    fi
fi
```
The client script outlined here will check for a new client certificate every time munki runs, and will attempt to receive a new one if it is two weeks or less from the current expiration.

# Conclusion
This was my first attempt at setting up SSL client auth, for anything. It took about a week of research, trial, and error to figure out. Without the help of `@groob` & the Mac Admins Slack I never would have gotten the project working.

Did I miss something? Reach out by emailing `ryan@buzzell.io` or `@rbuzzell` on the Mac Admins Slack and I'll put in a correction."