#### Set XORG as Default in Gnome (if Login-Manager doesn't switch).
```sh
# To see login SESSION NUMBER:
loginctl

# To see type:
loginctl show-session [YOUR SESSION NUMBER] -p Type

# Modify GDM Config:
nano /etc/gdm/custom.conf
```
```sh
[daemon]
WaylandEnable=false
DefaultSession=gnome-xorg.desktop
```
- Reboot.

#### To update FONTS CACHE:
```sh
fc-cache -fvh
# -f     Force re-generation of apparently up-to-date cache files, overriding the  timestamp checking.
# -r     Erase all existing cache files and rescan.
# -v     Display status information while busy.
# -h     Show summary of options.
```
#### Disable 10 min. lock after 3 FAILED LOGIN.
```sh
sudo nano /etc/security/faillock.conf
# SET -> deny = 0
```
#### Change LANGUAGE BAR Displaying sign.
```sh
sudo gedit /usr/share/X11/xkb/rules/evdev.xml
# 1. Find such ">en<" or ">uk<"
# 2. Change to ">EN<" or ">UK<"
```
-------------------------------------------------
#### Gnome-Extensions:

https://extensions.gnome.org/extension/1160/dash-to-panel/

https://extensions.gnome.org/extension/615/appindicator-support/

https://extensions.gnome.org/extension/2087/desktop-icons-ng-ding/

https://extensions.gnome.org/extension/4684/useless-gaps/

https://extensions.gnome.org/extension/1462/panel-date-format/
```sh
# Panel-Date-Format adjustment:
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%b %d,   %A,   %X'"
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%d,   %A,   %H:%M %p'"
# More formats here - https://docs.gtk.org/glib/method.DateTime.format.html
```
