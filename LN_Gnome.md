### Gnome tips :

**LockScreen** : Ctrl+Alt+F1
(it looks for screensaver processes running ps -aux | grep screen and kill them all).

- [**Libadwaita Dark Theme**](https://t.me/addtheme/libadwaita_dark)

- [**metaGEDIT**](https://github.com/pedrovernetti/metagedit) -- Gedit extra plugins

- [**Panel Date Format**](https://extensions.gnome.org/extension/1462/panel-date-format/)
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