```sh
sudo nano /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg

sudo pacman-mirrors --fasttrack && sudo pacman -Syyu

# Enable SSD-Trim:
sudo systemctl enable fstrim.timer
sudo systemctl start fstrim.timer
sudo systemctl status fstrim.timer

# Remove orphaned packages:
yay -Rns $(yay -Qtdq)

# Remove useless Packages:
yay -Yc

# System info:
yay -Ps

# Info of package
yay -Si

# List of installed packages
yay -Qqen > ~/Desktop/pkglist_repos.txt
yay -Qqem > ~/Desktop/pkglist_aur.txt

# Search in the installed packages:
yay -Qe | grep abc

# If necessary to test Microphone and Camera:
sudo pacman -S pavucontrol
```
