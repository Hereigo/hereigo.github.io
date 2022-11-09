#### Remember default monitor on boot:
```sh
sudo cp ~/.config/monitors.xml ~gdm/.config/
```

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
For a single user, install fonts to : ~/.local/share/fonts/
```sh
fc-cache -fvh
# -f     Force re-generation of apparently up-to-date cache files, overriding the  timestamp checking.
# -r     Erase all existing cache files and rescan.
# -v     Display status information while busy.
# -h     Show summary of options.
```

#### Gtk3-Gtk4 UX smoothing differences:

https://github.com/lassekongo83/adw-gtk3


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
#### Gnome-Panel FONT change:
```sh
https://extensions.gnome.org/extension/19/user-themes/

mkdir -p ~/.local/share/themes/pragmalin/gnome-shell/
nano ~/.local/share/themes/pragmalin/gnome-shell/gnome-shell.css
```
#### Import everything from the default Gnome Adwaita theme
#### Then - Customize:
```css
@import url("resource:///org/gnome/theme/gnome-shell.css");

stage {
    font-family: Comfortaa;
    font-size: 14px;
}
```
##### After Theme Customized - Tweaks - Appearance - Shell - (switch to Pragmalin)

#### Gnome-Extensions:
##### https://www.omgubuntu.co.uk/best-gnome-shell-extensions

https://extensions.gnome.org/extension/1160/dash-to-panel/
https://extensions.gnome.org/extension/2087/desktop-icons-ng-ding/
https://extensions.gnome.org/extension/3010/system-monitor-next/
https://extensions.gnome.org/extension/4684/useless-gaps/
https://extensions.gnome.org/extension/615/appindicator-support/
https://extensions.gnome.org/extension/2986/runcat/

https://extensions.gnome.org/extension/1462/panel-date-format/
```sh
# Panel-Date-Format adjustment:
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%b %d,   %A,   %X'"
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%d,   %A,   %H:%M %p'"
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%b  %e  %a  %H:%M %p'"
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%b  %e  %a  %R'"
# More formats here - https://docs.gtk.org/glib/method.DateTime.format.html
```

#### ‘Nordic’ GTK Theme
https://www.omgubuntu.co.uk/2022/01/nordic-is-a-nord-gtk-theme-for-linux
