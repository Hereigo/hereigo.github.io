### Arch tips :

```sh
# First of all:
sudo nano /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg

sudo pacman-mirrors --fasttrack && sudo pacman -Syyu

# Remove orphaned packages:
yay -Rns $(yay -Qtdq)

# Remove useless Packages:
yay -Yc

# See Installed Apps:
yay -Qe | grep abc

# If necessary to test Microphone and Camera:
sudo pacman -S pavucontrol
```