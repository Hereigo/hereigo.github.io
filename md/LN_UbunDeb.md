### Ubuntu Debian tips :

#### MX-Clear:

```sh
# DISABLE grub-themes BEFORE!
sudo apt remove -y apt-notifier asunder blueman bluetooth bluez* catfish conky* cleanup-notifier-mx cli-installer-mx disk-manager feh foliate* formatusb galculator geany* gmtp gnome-mahjongg gparted* grub-themes-mx guvcview* hardinfo htop inxi libreoffice* live-kernel-updater lbreakout2* live-usb-maker luckybackup* magnus mc* mx-conky* mx-iso-template mx-live-usb-maker mx-remaster* mx-snapshot mx-tour mx-viewer mx-welcome* nvidia-detect openjdk* orage* orca* peg-e pdfarranger qpdfview* qdirstat quick-system-info-gui samba* simple-scan strawberry swell-foop synaptic timeshift transmission* user-installed-packages vlc* xfburn xfce4-appfinder xfce4-notes* xfce4-sensors* printer-driver*

sudo apt list --installed linux-*
```

#### APT update in scripts:

```sh
sudo sh -c "apt -y update;apt -y full-upgrade;apt -y autoremove;apt -y autoclean"
```

#### See installed PPA's

```sh
grep -r --include '*.list' '^deb ' /etc/apt/sources.list /etc/apt/sources.list.d/
```
