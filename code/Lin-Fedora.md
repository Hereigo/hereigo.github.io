#### SpeedUp DNF:
```sh
sudo nano /etc/dnf/dnf.conf

skip_if_unavailable=True
fastestmirror=True # this param should be TESTED!
max_parallel_downloads=10
defaultyes=True
```

```sh
sudo dnf clean all

sudo dnf update
sudo dnf upgrade

sudo rpm -Uvh http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-35.noarch.rpm
sudo rpm -Uvh http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-35.noarch.rpm
# OR for any release:
sudo rpm -Uvh http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo rpm -Uvh http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

sudo dnf install gnome-tweak-tool ffmpeg neofetch dropbox fedy ttf-ms-fonts nerd-fonts-complete shrome-gnome-shell gdm-settings tlp tlp-rdw -y

sudo systemctl enable tlp
```

#### Extend Multimedia ability:
```sh
sudo dnf install gstreamer1-plugins-{bad-\*,good-\*,base} gstreamer1-plugin-openh264 gstreamer1-
libav --exclude=gstreamer1-plugins-bad-free-devel

sudo dnf install lame\* --exclude=lame-devel

sudo dnf group upgrade --with-optional Multimedia
```
