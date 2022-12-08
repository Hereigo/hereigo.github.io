### Ubuntu Debian tips :

#### APT main commands))
```sh
sudo sh -c "apt -y update;apt -y dist-upgrade;apt -y autoremove;apt -y autoclean"
#
flatpak update && sudo apt update && sudo apt full-upgrade -y
```

#### See installed PPA's
```sh
grep -r --include '*.list' '^deb ' /etc/apt/sources.list /etc/apt/sources.list.d/
```

```sh
# DoubleCMD
echo 'deb http://download.opensuse.org/repositories/home:/Alexx2000/xUbuntu_22.04/ /' | sudo tee /etc/apt/sources.list.d/home:Alexx2000.list
curl -fsSL https://download.opensuse.org/repositories/home:Alexx2000/xUbuntu_22.04/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/home_Alexx2000.gpg > /dev/null

# Foliate - Epub, Fb2, Mobi, Awz Viewer. 
sudo add-apt-repository ppa:apandada1/foliate

# Most useful apps:
sudo apt install -y remmina simplescreenrecorder deepin-screenshot nomacs 7-zip-full foliate qmmp doublecmd-gtk
```