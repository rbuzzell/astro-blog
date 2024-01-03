---
title: 'Cylance Deployment on macOS'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'August 3 2017'
heroImage: '/blog-placeholder-3.jpg'
---

I at one point had a Cylance package and needed to figure out how to mass deploy it.

The manual install directions it came with were 

1. Download the package
2. Open terminal and run 
```
cd ~/Downloads/
cat > cyagent_install_token <<EOF
B39D7692-572F-41D4-BBC8-3D8F39E542DE
Other-Bit-Of-Info
EOF
sudo installer -pkg CylancePROTECT.pkg -target /
```
3. Profit

This was an overly manual process for what needs to be a Munki based deployment. Upon using [Suspicous Package](http://www.mothersruin.com/software/SuspiciousPackage/) to look at the postinstall script I noticed these blocks of code
```
#!/bin/sh

INSTALL_TOKEN_FILE="/tmp/YvUnIpzc2omyt1ln"
if ! [ -e "$INSTALL_TOKEN_FILE" ]
then
	INSTALL_TOKEN_FILE="$(/usr/bin/dirname "$PACKAGE_PATH")/cyagent_install_token"
fi
```
```
if [ -e "/tmp/YvUnIpzc2omyt1ln" ]
then
   /bin/rm /tmp/YvUnIpzc2omyt1ln
fi
```

Ah-ha! It has a hardcoded location where it expects that file to exist. All we have to do is write a preinstall script in Munki that makes that file exist.
```
#!/bin/sh

cat > /tmp/YvUnIpzc2omyt1ln << EOF
B39D7692-572F-41D4-BBC8-3D8F39E542DE
Other-Bit-Of-Info
EOF
```
After testing it appers this was all it took to get it to deploy with Munki.