### Arch tips :

```sh
# First of all:
sudo nano /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg

sudo pacman-mirrors --fasttrack && sudo pacman -Syyu

yay gnome-system-monitor skypeforlinux-stable-bin visual-studio-code-bin/
nomacs p7zip-full exaile smplayer flameshot vokoscreen remmina freerdp
# + snappy - is viber dependency on Arch.

# EOS-Sendlog
echo '..or any command..' | eos-sendlog

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
# Detecting more unneeded packages
# (dependency cycles, excessive dependencies, unexplicit optionals etc.)
yay -Qqd | pacman -Rsu --print -

# If necessary to test Microphone and Camera:
sudo pacman -S pavucontrol
```

#### Qemu + KVM
```sh
pacman -S virt-manager qemu-desktop vde2 ebtables dnsmasq bridge-utils openbsd-netcat
# Activate and Launch KVM
systemctl enable --now libvirtd.service
# If Error: network 'default' is not active
sudo virsh net-start default
# to see networks:
sudo virsh net-list --all
```

 + [Arch tweaks](https://gist.github.com/lbrame/1678c00213c2bd069c0a59f8733e0ee6)

 #### EOS install DE like as from ISO:
```sh
# see available DEs\WMs
eos-packagelist --list
# See list of packages for any edition (ex. Openbox):
eos-packagelist "Openbox Edition"
# Install selected edition (ex. Openbox):
eos-packagelist --install "Openbox Edition"
```