### Gnome tips :

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

```