### Linux tips.
```sh
# APT main command))
sudo sh -c "apt -y update;apt -y dist-upgrade;apt -y autoremove;apt -y autoclean"
```

```sh
# Battery: Conservation Mode:
sudo su
# then Activate
echo 1 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode
# or Diactivate
echo 0 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode
```

```sh
# TLP:
sudo tlp start
sudo systemctl enable tlp.service
sudo systemctl start tlp.service
sudo systemctl status tlp.servicey
```

```sh
# Enable SSD-Trim:
sudo systemctl enable fstrim.timer
sudo systemctl start fstrim.timer
sudo systemctl status fstrim.timer
```

```sh
# UFW:
sudo ufw enable
sudo systemctl enable ufw # ... ->
# Created symlink /etc/systemd/system/multi-user.target.wants/ufw.service → /usr/lib/systemd/system/ufw.service.
sudo ufw status
```

```sh
# To update FONTS cache:
fc-cache -fvh
# -f     Force re-generation of apparently up-to-date cache files, overriding the  timestamp checking.
# -r     Erase all existing cache files and rescan.
# -v     Display status information while busy.
# -h     Show summary of options.
```