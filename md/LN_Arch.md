### Arch tips :

```sh
# First of all:

# Modify ==> /etc/pacman.conf :
# Uncomment => ParallelDownloads
# then:
sudo pacman-key --init
sudo pacman-key --populate archlinux  # (get keys)
sudo pacman-key --refresh-keys
sudo pacman -Syu

# Reflector:
sudo pacman -S reflector rsync curl
# Set Mirrors:
sudo reflector --verbose --country 'Germany' -l 25 --sort rate --save /etc/pacman.d/mirrorlist
#
sudo pacman-mirrors --fasttrack && sudo pacman -Syyu # ???

# Microcodes :
sudo pacman -S intel-ucode
# or
sudo pacman -S amd-ucode
# then update initramfs :
sudo mkinitcpio -P

# Video Drivers :
sudo pacman -S mesa vulkan-intel vulkan-icd-loader
# or
sudo pacman -S mesa vulkan-radeon vulkan-icd-loader

# GRUB :
sudo nano /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg

# SSD useful Trim Command enable:
sudo systemctl enable fstrim.timer
sudo fstrim -v /
sudo fstrim -va /

# CPUPower
sudo pacman -S cpupower
sudo cpupower frequency-set -g performance # setup mode that is until reboot
# to set it as permanent :
# /etc/default/cpupower
# set:
# governor=performance
# and
sudo systemctl enable cpupower

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

### AUR toggle (manjaro)
```sh
# to Comment:
sudo sed -Ei '/EnableAUR/s/^/#/' /etc/pamac.conf
# to UnComment:
sudo sed -Ei '/EnableAUR/s/^#//' /etc/pamac.conf
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

### EOS :
```sh

Install + LTS-kernls!

/liveuser/preinstalled_pkgs.txt

----------------------------------------------------------------------------------
yay -S thunderbird telegram-desktop signal-desktop keepassxc p7zip flameshot viber

wget https://mega.nz/linux/repo/Arch_Extra/x86_64/megasync-x86_64.pkg.tar.zst && sudo pacman -U "$PWD/megasync-x86_64.pkg.tar.zst"

----------------------------------------------------------------------------------
nano /etc/default/grub
grub-mkconfig -o /boot/grub/grub.cfg

----------------------------------------------------------------------------------
# Dump:
dconf dump /org/cinnamon/ > ~/Desktop/cinnamon.dconf
dconf dump /org/nemo/ > ~/Desktop/nemo.dconf
dconf dump /org/gtk/ > ~/Desktop/gtk.dconf
dconf dump /org/gnome/ > ~/Desktop/gnome.dconf
# Load:
dconf load /org/cinnamon/ > ~/Desktop/cinnamon.dconf
dconf load /org/nemo/ > ~/Desktop/nemo.dconf
dconf load /org/gtk/ > ~/Desktop/gtk.dconf
dconf load /org/gnome/ > ~/Desktop/gnome.dconf

----------------------------------------------------------------------------------
cp ~/.cinnamon/configs - this includes individual applet configs.
~/.cinnamon/panel-launchers - desktop files for any panel-launchers applets you have
~/.local/share/cinnamon/applets

----------------------------------------------------------------------------------
# Guest Additions:
sudo sh VBoxLinuxAdditions.run

# Access to Shared folders:
sudo adduser [username] vboxsf
```
### Cinnamon
```css
/usr/share/cinnamon/theme/cinnamon.css
---------------------------------------

#panel {
    background-color: #000000;
}    
.modal-dialog {
    background-color: #000000;    
}
.grouped-window-list-box {
    spacing: 4px;
}   
.applet-box {
    padding-left: 8px;
    padding-right: 8px;
}
.menu-background {
    background-color: #000000;
}
```
