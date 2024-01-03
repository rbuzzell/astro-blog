---
title: "Using AD CS for machine-based EAP-TLS on macOS"
description: 'Lorem ipsum dolor sit amet'
pubDate: 'August 28 2019'
heroImage: '/blog-placeholder-3.jpg'
---


```xml
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>PayloadContent</key>
	<array>
		<dict>
			<key>PayloadContent</key>
			<data>
			YOUR X509/PEM RADIUS CERT HERE
			</data>
			<key>PayloadDisplayName</key>
			<string>Certificate</string>
			<key>PayloadIdentifier</key>
			<string>GUID</string>
			<key>PayloadOrganization</key>
			<string></string>
			<key>PayloadType</key>
			<string>com.apple.security.pkcs1</string>
			<key>PayloadUUID</key>
			<string>60EDDC99-F33D-4D91-A93C-601977638A13</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
		</dict>
		<dict>
			<key>AllowAllAppsAccess</key>
			<true/>
			<key>CertServer</key>
			<string>YOUR CERT SERVER FQDN HERE</string>
			<key>CertTemplate</key>
			<string>NAME_OF_CERT_TEMPLATE_HERE_REQUIRES_NO_SPACES</string>
			<key>CertificateAcquisitionMechanism</key>
			<string>RPC</string>
			<key>CertificateAuthority</key>
			<string>YOUR CA NAME HERE</string>
			<key>CertificateRenewalTimeInterval</key>
			<integer>14</integer>
			<key>Description</key>
			<string>AD Machine Cert</string>
			<key>EnableAutoRenewal</key>
			<true/>
			<key>KeyIsExtractable</key>
			<false/>
			<key>Keysize</key>
			<integer>2048</integer>
			<key>PayloadDisplayName</key>
			<string>AD Certificate</string>
			<key>PayloadIdentifier</key>
			<string>com.company.fqdn.24B78032-17F2-4705-86C1-D36ABE51273C.com.apple.ADCertificate.managed.44169206-CBE1-43FD-BD03-C1F7533CC2CA</string>
			<key>PayloadOrganization</key>
			<string></string>
			<key>PayloadType</key>
			<string>com.apple.ADCertificate.managed</string>
			<key>PayloadUUID</key>
			<string>44169206-CBE1-43FD-BD03-C1F7533CC2CA</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
		</dict>
		<dict>
			<key>AutoJoin</key>
			<true/>
			<key>EAPClientConfiguration</key>
			<dict>
				<key>AcceptEAPTypes</key>
				<array>
					<integer>13</integer>
				</array>
				<key>PayloadCertificateAnchorUUID</key>
				<array>
					<string>60EDDC99-F33D-4D91-A93C-601977638A13</string>
				</array>
				<key>TLSTrustedServerNames</key>
				<array>
					<string>YOUR TRUSTED SERVER NAME HERE</string>
				</array>
			</dict>
			<key>EncryptionType</key>
			<string>WPA2</string>
			<key>PayloadCertificateUUID</key>
			<string>44169206-CBE1-43FD-BD03-C1F7533CC2CA</string>
			<key>PayloadDisplayName</key>
			<string>Wi-Fi</string>
			<key>PayloadIdentifier</key>
			<string>com.company.fqdn.24B78032-17F2-4705-86C1-D36ABE51273C.com.apple.wifi.managed.24B78032-17F2-4705-86C1-D36ABE51273C</string>
			<key>PayloadOrganization</key>
			<string></string>
			<key>PayloadType</key>
			<string>com.apple.wifi.managed</string>
			<key>PayloadUUID</key>
			<string>24B78032-17F2-4705-86C1-D36ABE51273C</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>SSID_STR</key>
			<string>YOU_WIFI_SSID_HERE</string>
			<key>SetupModes</key>
			<array>
				<string>System</string>
			</array>
			<key>TLSCertificateRequired</key>
			<true/>
		</dict>
	</array>
	<key>PayloadDisplayName</key>
	<string>Machine Cert Request w/ WiFi Configuration</string>
	<key>PayloadIdentifier</key>
	<string>com.company.fqdn.40C664B3-63F3-4E28-9204-9579DB0DC8DC</string>
	<key>PayloadOrganization</key>
	<string>YOUR ORG | DEPT NAME HERE</string>
	<key>PayloadScope</key>
	<string>System</string>
	<key>PayloadType</key>
	<string>Configuration</string>
	<key>PayloadUUID</key>
	<string>40C664B3-63F3-4E28-9204-9579DB0DC8DC</string>
	<key>PayloadVersion</key>
	<integer>1</integer>
</dict>
</plist>
```

#### 2024 Note: 
When copying this over I realized I just dropped the plist file and nothing else.

This is a sanitized version of the plist file/profile that allowed macOS to pull a certificate from ADCS in my old envionment.
There may be updates to the format, this may no longer work. Unfortuantely, there's no macOS or 802.1x in my new environment so I'm unable to check up on it.