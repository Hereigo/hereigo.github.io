```sh
sudo apt purge -y mono-runtime-common libreoffice-base* openjdk*
```

```sh
yay -S gnome-system-monitor chrome-gnome-shell dropbox fbreader pinta nomacs simplescreenrecorder remmina freerdp ffmpeg shortwave geany geany-plugins megasync-bin microsoft-edge-stable-bin skypeforlinux-preview-bin viber visual-studio-code-bin qmmp rclone keepassxc evolution
```

### UFW:
```sh
# INSTALL - ufw gufw
sudo ufw enable
sudo systemctl enable ufw
sudo ufw status
```
### TLP:
```sh
# INSTALL - tlp tlpui
sudo tlp start
sudo systemctl enable tlp.service
sudo systemctl start tlp.service
sudo systemctl status tlp.service

sudo nano /etc/tlp.conf
# STOP_CHARGE_THRESH_BAT0: 0(off), 1(on) -- battery conservation mode
# - BAT0 because conservation mode applies to all batteries regardless of their name.
# START_CHARGE_THRESH_BAT1="70"
# STOP_CHARGE_THRESH_BAT1="80"

# Then use the terminal command
sudo tlp setcharge

# Check:
sudo tlp-stat -b
```
### UnoDisco:
```sh
install rclone
rclone config
# ...
mkdir ~/UnoDisco
rclone --vfs-cache-mode writes mount UnoDisco: ~/UnoDisco
# Add cmd to Startup - to Mount on Login:
sh -c "rclone --vfs-cache-mode writes mount UnoDisco: ~/UnoDisco"
```
##### 1Drive.desktop
```sh
[Desktop Entry]
# The type as listed above
Type=Application
# The version of the desktop entry specification to which this file complies
Version=1.0
# The name of the application
Name=1Drive
# A comment which can/will be used as a tooltip
Comment=1Drive Mounter
# The path to the folder in which the executable is run
Path=/opt/rsync
# The executable of the application, possibly with arguments.
Exec=sh -c "rclone --vfs-cache-mode writes mount AaaOneDrive: ~/OneDrive"
# The name of the icon that will be used to display this entry
Icon=rclone
# Describes whether this application needs to be run in a terminal or not
Terminal=false
# Describes the categories in which this entry should be shown
Categories=Rclone;Drive;
```

WPS Office Dictionaries - https://github.com/HoLuLuLu/wps-office-multilang/tree/master/wps-office-bin/opt/kingsoft/wps-office/office6/dicts/spellcheck

- AppImagePool - https://github.com/prateekmedia/appimagepool/releases
- AppImagesHub - https://www.appimagehub.com/
- Apps Flatpak Permissions - Flatseal
- Apps Packages manager GUI - bauh
- Balena Etcher - https://www.balena.io/etcher/
- Battery SlimBookBattry - https://github.com/slimbook/slimbookbattery/releases
- Battery-Monitor - https://github.com/maateen/battery-monitor#for-ubuntu-and-its-derivatives
- Books Calibre - https://calibre-ebook.com/download_linux
- Cleaner BleachBit - https://www.bleachbit.org
- Cleaner DebOrphan - https://manpages.ubuntu.com/manpages/bionic/man1/deborphan.1.html
- Duplicates - fslint-gui
- Duplicates FSlint - https://www.pixelbeat.org/fslint/
- Duplicates and Similar images: Czkawka - https://github.com/qarmin/czkawka/releases
- Evernote - https://evernote.com/earlyaccess
- FireWall UI OpenSnitch  - https://github.com/evilsocket/opensnitch/releases
- GDU - GoDiskUsage - https://github.com/dundee/gdu/releases
- GoogAnal FF Addon - https://tools.google.com/dlpage/gaoptout
- Handbreak Media Converter - sudo add-apt-repository ppa:stebbins/handbrake-releases
- IPTV Hypnotix - https://linuxmasterclub.com/hypnotix/
- Lotion.so - https://github.com/puneetsl/lotion
- Music 4 Focus - https://github.com/rafaelmardojai/blanket
- MusicBrainz auto-tagger - picard
- MusicPlayer - qmmp
- MusicPlayerSkins - http://qmmp.ylsoftware.com/files/skins/qmmp-skins/
- Notion.so - https://github.com/notion-enhancer/notion-repackaged/releases/
- PDF-Arranger Editor - https://github.com/pdfarranger/pdfarranger
- Privacy RetroShape - https://retroshare.cc
- Privacy Shpere - https://sphere.tenebris.cc/documentation.html
- Recovery R-Linux - https://www.r-studio.com/free-linux-recovery/Download.shtml
- ScreenRecord 4 Wayland - kooha
- SysMonCenter - https://sourceforge.net/projects/system-monitoring-center/files/latest/download
- Ungoogled-Chromium - https://ungoogled-software.github.io/ungoogled-chromium-binaries/
- Video Amazing Player Haruna - flatpak install flathub org.kde.haruna
- Video Combine - https://mpv.io
- Video Converter FlowBlade - https://jliljebl.github.io/flowblade/download.html
- Video Converter WinFF (GUI 4 FFmpeg) - https://github.com/WinFF/winff
- Video Cut LossLessCut - https://github.com/mifi/lossless-cut/releases
- XnConverter - https://download.xnview.com/XnConvert-linux-x64.deb
- Youtube-dl - https://github.com/ytdl-org/youtube-dl/releases/
