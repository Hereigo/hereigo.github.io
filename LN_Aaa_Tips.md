### Linux tips.

```sh
journalctl -S "yyyy-MM-dd HH:mm:ss" --user
```

#### Smart view Drives:
```sh
lsblk
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
sudo bash

# 1. Create Script:
nano /usr/local/sbin/ABC-SCRIPT.sh
#!/bin/bash
# your script code here

chmod 0700 /usr/local/sbin/ABC-SCRIPT.sh

# 2. Create Service:
nano /etc/systemd/system/ABC-SCRIPT.service
#
[Unit]
Description=Your descripotion here...
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