---
title: 'macOS Login Window WiFi Profile'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'August 3 2017'
heroImage: '/blog-placeholder-3.jpg'
---
Recently I was tasked with writing a profile to allow users to log in without needing a wired connection. The only posts I could find for doing this involve using the now inaccessible iPhone configurator, or reference snippets and images that are inaccessible.

We solved this problem at my last job, and after an afternoon of beating my head against the wall trying to recreate it, I admitted defeat and reached out and asked for a sanitized copy of their profile, which I received the next morning. There are a few "gotchas" in the profile I've noted with the `#` character. 
1. You need to have a Base64 copy of the SSL certificate for your RADIUS server. The certificate won't even install without it.
2. You need to have a friendly display name here, it will appear on the login screen in a drop down.
3. The SSID of the network you wish them to connect to.

Those three changes should give you everything you be all you need to change to get it working, but you should probably provide reasonable identifiers and descriptions. You should make sure the WiFi is switched on, and that you install this as a system profile using Munki (or an MDM) or by using `sudo profiles -IF ./com.org.loginWindowWirelessProfile.mobileconfig`
```
<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<!DOCTYPE plist PUBLIC "- Apple DTD PLIST 1.0 EN" 
"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">
<plist version=\"1.0\">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadContent</key>
            <data>
                # The Base64 Encoded SSL Certificate for your radius server goes here. This is required.
            </data>
            <key>PayloadEnabled</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.org.radiuscert</string>
            <key>PayloadType</key>
            <string>com.apple.security.root</string>
            <key>PayloadUUID</key>
            <string>368DD7D6-DB79-4339-96F8-AA37A5277EE9</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>updated_at_xid</key>
            <integer>270993</integer>
        </dict>
        <dict>
            <key>AuthenticationMethod</key>
            <string>directory</string>
            <key>AutoJoin</key>
            <true/>
            <key>EAPClientConfiguration</key>
            <dict>
                <key>AcceptEAPTypes</key>
                <array>
                    <integer>25</integer>
                </array>
                <key>OneTimeUserPassword</key>
                <false/>
                <key>PayloadCertificateAnchorUUID</key>
                <array>
                    <string>F8D886A8-7A0F-4062-88B2-BFB189047C66</string>
                </array>
                <key>SystemModeCredentialsSource</key>
                <string>ActiveDirectory</string>
                <key>UserName</key>
                <string></string>
                <key>UserPassword</key>
                <string></string>
            </dict>
            <key>EncryptionType</key>
            <string>WPA2</string>
            <key>HIDDEN_NETWORK</key>
            <false/>
            <key>Interface</key>
            <string>BuiltInWireless</string>
            <key>PayloadDisplayName</key>
            <string>#This displays on the login window</string>
            <key>PayloadEnabled</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.org.loginWindowWirelessConfig</string>
            <key>PayloadType</key>
            <string>com.apple.wifi.managed</string>
            <key>PayloadUUID</key>
            <string>39762509-B0BE-4152-AE94-C143DAB56DA6</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>ProxyType</key>
            <string>None</string>
            <key>SSID_STR</key>
            <string>#yourSSIDHere</string>
            <key>SetupModes</key>
            <array>
                <string>Loginwindow</string>
            </array>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>WiFi Settings</string>
    <key>PayloadIdentifier</key>
    <string>com.org.loginWindowWirelessProfile</string>
    <key>PayloadOrganization</key>
    <string>#Your org name here</string>
    <key>PayloadRemovalDisallowed</key>
    <true/>
    <key>PayloadScope</key>
    <string>LoginWindow</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>2F8A16E8-513A-493B-AD61-0CB8A0B2DE23</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>


```

# Update 1/23/2018:
As a note to myself: If you forget what a base64 encoded certificate is again and it's an emergency again, it's the bits in a PEM encoded certificate that are between `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`"