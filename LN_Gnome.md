### Gnome tips :

**LockScreen** : Ctrl+Alt+F1
(it looks for screensaver processes running ps -aux | grep screen and kill them all).

- [**Libadwaita Dark Theme**](https://t.me/addtheme/libadwaita_dark)

```sh
# Disable 10 min. lock after 3 failed login:
sudo nano /etc/security/faillock.conf
# SET -> deny = 0

# Change Language bar Displaying sign:
sudo gedit /usr/share/X11/xkb/rules/evdev.xml
# 1. Find such ">en<" or ">uk<"
# 2. Change to ">EN<" or ">UK<"

# Viber launch with tray icon:
dbus-launch /opt/viber/Viber

# Create Desktop link:
cd /usr/share/applications/ && ls *Optional-Part-Of-Name-Of-Needed-App*
# and for Snap-Apps:
cd /var/lib/snapd/desktop/applications/ && ls
# after find your app:
cp Your-App-Name.desktop ~/Desktop/
# don't forget to allow to execute the link on desktop.

```