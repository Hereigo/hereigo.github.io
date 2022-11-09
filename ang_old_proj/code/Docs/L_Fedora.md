#### Grub:
```sh
sudo nano /etc/default/grub
grub2-mkconfig -o /boot/grub2/grub.cfg
```

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
```

#### Adding the Flathub Repository:
```sh
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

flatpak install flathub org.kde.haruna # Amazing Player Haruna
####################################
sudo dnf install gnome-tweak-tool gnome-tweaks gnome-extensions-app ffmpeg neofetch dropbox fedy ttf-ms-fonts nerd-fonts-complete shrome-gnome-shell gdm-settings tlp tlp-rdw -y

sudo systemctl enable tlp

#### Extend Multimedia ability:
sudo dnf install gstreamer1-plugins-{bad-\*,good-\*,base} gstreamer1-plugin-openh264 gstreamer1-libav --exclude=gstreamer1-plugins-bad-free-devel

sudo dnf install lame\* --exclude=lame-devel

sudo dnf group upgrade --with-optional Multimedia
```

#### VSCode:
```sh
sudo dnf upgrade --refresh -y
sudo nano /etc/yum.repos.d/vscode.repo
```
[vscode]
name=Visual Studio Code
baseurl=https://packages.microsoft.com/yumrepos/vscode 
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc
```sh
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo dnf update
sudo dnf install code
```

#### Change Hostname After Installation
```sh
sudo hostnamectl set-hostname "New_Custom_Name"
```

#### NVidia Drivers:
https://itsfoss.com/install-nvidia-drivers-fedora/
