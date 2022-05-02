```sh
sudo nano /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg

sudo pacman-mirrors --fasttrack && sudo pacman -Syyu

# Install Packages:
yay -S ufw gufw p7zip gnome-system-monitor chrome-gnome-shell megasync dropbox visual-studio-code-bin tlp tlpui fbreader pinta nomacs audacious deepin-screenshot remmina freerdp doublecmd-gtk2 vlc ffmpeg kooha skypeforlinux-preview-bin microsoft-edge-stable-bin gnome-boxes fslint-gui

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

# If necessary to test Microphone and Camera:
sudo pacman -S pavucontrol
```
