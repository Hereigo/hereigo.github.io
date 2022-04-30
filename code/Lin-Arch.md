### Arch with Gnome post install:

```sh
# First of all:
sudo nano /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg

sudo pacman-mirrors --fasttrack && sudo pacman -Syyu

# Install Packages:
yay -S ufw gufw p7zip gnome-system-monitor chrome-gnome-shell megasync dropbox visual-studio-code-bin tlp tlpui fbreader pinta nomacs audacious deepin-screenshot remmina freerdp doublecmd-gtk2 vlc ffmpeg kooha skypeforlinux-preview-bin microsoft-edge-stable-bin gnome-boxes

# Optional additional packages:
qmmp # Qmmp: simple music
remmina-plugin-rdesktop # possibly needed

# UFW:
sudo ufw enable
sudo systemctl enable ufw
sudo ufw status

# TLP:
sudo tlp start
sudo systemctl enable tlp.service
sudo systemctl start tlp.service
sudo systemctl status tlp.servicey

# Enable SSD-Trim:
sudo systemctl enable fstrim.timer
sudo systemctl start fstrim.timer
sudo systemctl status fstrim.timer

# Remove orphaned packages:
yay -Rns $(yay -Qtdq)

# Remove useless Packages:
yay -Yc

# See Installed Apps:
yay -Qe | grep abc

# Additional functionality:

# If necessary to test Microphone and Camera:
sudo pacman -S pavucontrol

# To update FONTS cache:
fc-cache -fvh
# -f     Force re-generation of apparently up-to-date cache files, overriding the  timestamp checking.
# -r     Erase all existing cache files and rescan.
# -v     Display status information while busy.
# -h     Show summary of options.

# Disable 10 min. lock after 3 failed login.
sudo nano /etc/security/faillock.conf
# SET -> deny = 0

# Change Language bar Displaying sign.
sudo gedit /usr/share/X11/xkb/rules/evdev.xml
# 1. Find such ">en<" or ">uk<"
# 2. Change to ">EN<" or ">UK<"
```
##### Gnome-Extensions:
https://extensions.gnome.org/extension/1160/dash-to-panel/
https://extensions.gnome.org/extension/615/appindicator-support/
https://extensions.gnome.org/extension/2087/desktop-icons-ng-ding/
https://extensions.gnome.org/extension/4684/useless-gaps/
https://extensions.gnome.org/extension/1462/panel-date-format/
```sh
# Panel-Date-Format adjustment:
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%b %d,   %A,   %X'"
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%d,   %A,   %H:%M %p'"
# More formats here - https://docs.gtk.org/glib/method.DateTime.format.html
```
