### Linux tips.
```sh
# APT main commands))
sudo sh -c "apt -y update;apt -y dist-upgrade;apt -y autoremove;apt -y autoclean"
#
alias foo='flatpak update && sudo apt update && sudo apt full-upgrade -y'
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
sudo apt install tlp tlp-rdw
sudo systemctl enable tlp.service
sudo systemctl start tlp.service
sudo systemctl status tlp.service
sudo tlp start
sudo tlp-stat
# config file:
/etc/default/tlp
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