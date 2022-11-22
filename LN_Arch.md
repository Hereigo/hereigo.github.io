### Arch tips :

```sh
# First of all:
sudo nano /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg

sudo pacman-mirrors --fasttrack && sudo pacman -Syyu

yay gnome-tweaks gnome-browser-connector gnome-system-monitor remmina freerdp simplescreenrecorder skypeforlinux-stable-bin deepin-screenshot visual-studio-code-bin nomacs 7-zip-full viber snappy
# - snappy - is needed for viber 18.2 on Arch.

# FONTS:
mkdir ~/.local/share/fonts/
cp /MY_PATH/*.ttf ~/.local/share/fonts/
fc-cache -f

# Remove orphaned packages:
yay -Rns $(yay -Qtdq)

# Remove useless Packages:
yay -Yc

# See Installed Apps:
yay -Qe | grep abc

# If necessary to test Microphone and Camera:
sudo pacman -S pavucontrol
```