# AndSein

Jangan lupa install react-native-cli

```bash
sudo npm install -g react-native-cli
```
jangan lupa setting rules dengan membuat file berikut

```bash
sudo nano /etc/udev/rules.d/51-android-usb.rules
```

dengan isi berikut

```bash
SUBSYSTEM=="usb", ATTR{idVendor}="04e8", MODE="0666", GROUP="plugdev"
```

untuk cloning repo ini jangan lupa

```bash
npm install
react-native run-android
```
