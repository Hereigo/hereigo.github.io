### Ubuntu Debian tips :

#### APT main commands))
```sh
sudo sh -c "apt -y update;apt -y dist-upgrade;apt -y autoremove;apt -y autoclean"
#
flatpak update && sudo apt update && sudo apt full-upgrade -y
```

#### See installed PPA's
```sh
grep -r --include '*.list' '^deb ' /etc/apt/sources.list /etc/apt/sources.list.d/
```