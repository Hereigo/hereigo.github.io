### Gnome tips :

#### Gnome necessary for Arch:
```sh
yay -S gnome-tweaks gnome-browser-connector gnome-system-monitor
```

**LockScreen** : Ctrl+Alt+F1
(it looks for screensaver processes running ps -aux | grep screen and kill them all).

--> <u> ***[**Libadwaita Dark Theme**](https://t.me/addtheme/libadwaita_dark)*** </u>

--> <u> ***[**metaGEDIT**](https://github.com/pedrovernetti/metagedit)*** </u> -- Gedit extra plugins

--> <u> ***[**Firefox Gnome Theme**](https://github.com/rafaelmardojai/firefox-gnome-theme)*** </u>

--> <u> ***[**Panel Date Format**](https://extensions.gnome.org/extension/1462/panel-date-format/)*** </u>
```sh
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%b %d,   %A,   %X'"
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%d,   %A,   %H:%M %p'"
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%b  %e  %a  %H:%M %p'"
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%b  %e  %a  %R'"
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%A    ·    %R    ·    %B  %e'"
dconf write /org/gnome/shell/extensions/panel-date-format/format "'%A     ·     %H : %M     ·     %B  %e'"
# More formats here - https://docs.gtk.org/glib/method.DateTime.format.html
```

```sh
# Disable 10 min. lock after 3 failed login:
sudo nano /etc/security/faillock.conf
# SET -> deny = 0

# Change Language bar Displaying sign:
sudo gedit /usr/share/X11/xkb/rules/evdev.xml
# 1. Find such ">en<" or ">uk<"
# 2. Change to ">EN<" or ">UK<"
```