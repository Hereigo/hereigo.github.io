### Ubuntu Debian tips :

#### MX-Clear:

```sh
sudo apt remove -y apt-notifier asunder baobab blueman bluetooth bluez* catfish cleanup-notifier-mx disk-manager featherpad* galculator gmtp gnome-mahjongg gparted* guvcview* hardinfo htop libreoffice* live-kernel-updater lbreakout2* live-usb-maker luckybackup* magnus mc* mx-iso-template mx-live-usb-maker mx-remaster* mx-snapshot mx-tour mx-viewer mx-welcome* nvidia-detect openjdk* orage* orca* peg-e pdfarranger qpdfview* qdirstat samba* simple-scan strawberry swell-foop synaptic timeshift transmission* vlc xfburn xfce4-appfinder xfce4-notes* printer-driver*

wget https://mega.nz/linux/repo/Debian_testing/amd64/megasync-Debian_testing_amd64.deb 
wget https://download.cdn.viber.com/cdn/desktop/Linux/viber.deb

sudo apt install ~/viber.deb ~/megasync-Debian_testing_amd64.deb
```

#### APT main commands))

```sh
flatpak update && sudo apt update && sudo apt full-upgrade

# in scripts:
sudo sh -c "apt -y update;apt -y dist-upgrade;apt -y autoremove;apt -y autoclean"
```

#### See installed PPA's

```sh
grep -r --include '*.list' '^deb ' /etc/apt/sources.list /etc/apt/sources.list.d/
```
