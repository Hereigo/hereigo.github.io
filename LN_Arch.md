### Arch tips :

```sh
# First of all:
sudo nano /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg

sudo pacman-mirrors --fasttrack && sudo pacman -Syyu

yay gnome-system-monitor skypeforlinux-stable-bin visual-studio-code-bin nomacs 7-zip-full exaile smplayer flameshot vokoscreen remmina freerdp viber
# + snappy - is viber dependency on Arch.

# FONTS:
mkdir ~/.local/share/fonts/
cp /MY_PATH/*.ttf ~/.local/share/fonts/
fc-cache -f

# Find Installed Apps:
yay -Qe | grep abc

# See Installed Packages:
yay -Qe # Explicitly installed
yay -Qm # Manually installed or Removed from Repo.
yay -Qn # Native packages

# Remove useless Packages:
yay -Yc
# Remove orphaned packages:
yay -Rns $(yay -Qtdq)
# Detecting more unneeded packages (dependency cycles, excessive dependencies, unexplicit optionals etc.
yay -Qqd | pacman -Rsu --print -

# If necessary to test Microphone and Camera:
sudo pacman -S pavucontrol
```

 + [Arch tweaks](https://gist.github.com/lbrame/1678c00213c2bd069c0a59f8733e0ee6)