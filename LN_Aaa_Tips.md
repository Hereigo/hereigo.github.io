### Linux tips.

```sh
journalctl -S "yyyy-MM-dd HH:mm:ss" --user

# -Reverse -Kernel0related -NumbersToShow
journalctl -r -k -n 10

journalctl --list-boots
# Latest Boot.
journalctl -b -0

journalctl --since yesterday --until 2029-12-31 12:00:00

journalctl --no-page # with no 'less' option

journalctl -o json-pretty >> ~/Desktop/journalctl.json
#
```

### Fonts
```sh
apt install fonts-cantarel fonts-cascadia-code
```

### AUR toggle (manjaro)
```sh
# to Comment:
sudo sed -Ei '/EnableAUR/s/^/#/' /etc/pamac.conf
# to UnComment:
sudo sed -Ei '/EnableAUR/s/^#//' /etc/pamac.conf
```


### Check Temperatures:
```sh
sensors && sudo hddtemp /dev/sda && sudo hddtemp /dev/sdb
# or
ls /sys/class/hwmon/hwon2/
cat /sys/class/hwmon/hwmon2/temp1_input
```


#### Locale Cfg:
```sh
sudo nano /etc/locale.conf
```

#### Smart view Drives:
```sh
lsblk
```

#### Network devices:
```sh
inxi -Naz
```

#### TouchPad disable on boot:
```sh
synclient TouchpadOff=1
```

#### Battery: Conservation Mode:
```sh
sudo su
# then Activate
echo 1 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode
# or Diactivate
echo 0 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode
```

#### AutoRun Script on Boot:
```sh
nano /usr/local/sbin/ABC-SCRIPT.sh

#!/bin/bash
# Battery Conservation Activate
echo 1 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode

# or Diactivate
echo 0 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode

# Allow to Owner to read-write and Execute.
chmod 0700 /usr/local/sbin/ABC-SCRIPT.sh

# Create Service:
nano /etc/systemd/system/ABC-SCRIPT.service
#
[Unit]
Description=Battery Conservation Mode On.
[Service]
ExecStart=/usr/local/sbin/ABC-SCRIPT.sh
[Install]
WantedBy=multi-user.target

# Enable Service:
systemctl start ABC-SCRIPT.service
systemctl enable ABC-SCRIPT.service
```

#### TLP:
```sh
sudo apt install tlp tlp-rdw
sudo systemctl enable tlp.service
sudo systemctl start tlp.service
sudo systemctl status tlp.service
sudo tlp start
sudo tlp-stat
# config file:
/etc/default/tlp
```

#### Enable SSD-Trim:
```sh
sudo systemctl enable fstrim.timer
sudo systemctl start fstrim.timer
sudo systemctl status fstrim.timer
```

#### UFW:
```sh
sudo ufw enable
sudo systemctl enable ufw # ... ->
# Created symlink /etc/systemd/system/multi-user.target.wants/ufw.service → /usr/lib/systemd/system/ufw.service.
sudo ufw status
```

#### To update FONTS cache:
```sh
fc-cache -fvh
# -f     Force re-generation of apparently up-to-date cache files, overriding the  timestamp checking.
# -r     Erase all existing cache files and rescan.
# -v     Display status information while busy.
# -h     Show summary of options.
```

#### Celluloid (MPV) save video position on close:
```sh
mkdir ~/.config/mpv/ && echo "save-position-on-quit" >> ~/.config/mpv/mpv.conf
# Then select this file in the Celluloid menu.
```

#### Viber launch with tray icon:
(dbus-launch - Utility to start a message bus from a shell script)
```sh
dbus-launch /opt/viber/Viber
```

#### Create Desktop link:
```sh
# Find *.desktop first.
cd /usr/share/applications/ && ls (*AAAA-Part-Of-App-Name-Optionally*)
# same for Snap-Apps:
cd /var/lib/snapd/desktop/applications/ && ls

# Copy to Desktop:
cp /usr/share/applications/AAAA.desktop ~/Desktop/
# Allow to execute:
chmod 0700 ~/Desktop/AAAA.desktop
```

#### Default File browser:
```sh
# Check default file browser:
xdg-mime query default inode/directory
# Set Thunar as default file browser:
xdg-mime default thunar.desktop inode/directory
# or in
/usr/share/applications/mimeapps.list 
# setup (for example)
[Default Applications]
inode/directory=exfalso.desktop;nautilus.desktop;
```

#### GREP - Global Regular Expression Print
```sh
# Syntax    : grep [option] [pattern] [files]
# [options] :
-A num -> print num lines After Matching
-B num -> print num lines Before Matching
-L -----> List files that do NOT match the pattern
-c -----> Count total matched lines
-i -----> insensitive case
-l -----> List Files that match the pattern
-n -----> Number of output line
-r,-R --> Recursive search
-v -----> inVert match
# ----------------------------------------
grep ^[pattern] [files] # Lines that START with the pattern
grep [pattern]$ [files] # Lines that END with the pattern
grep -i ['pattern1\|pattern2'] [files] # Use of OR to check either of two patterns
grep -i ['pattern1.*pattern2'] [files] # Use of AND to check both two patterns
```

#### SED - Stream EDitor
```sh
sed 's/pattern/replacement/g' [file] # Substitute text 
sed 's/\bapple\b/orange/g' [file] > [new_file] # \b = Boundaries (only absolute! match)
sed '/pattern/d' [file] # Delete lines
```