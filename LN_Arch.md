### Arch tips :

```sh
# First of all:
sudo nano /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg

sudo pacman-mirrors --fasttrack && sudo pacman -Syyu

yay remmina freerdp simplescreenrecorder skypeforlinux-stable-bin visual-studio-code-bin nomacs 7-zip-full qmmp clementine viber
# + snappy - is needed for viber 18.2 on Arch.

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
