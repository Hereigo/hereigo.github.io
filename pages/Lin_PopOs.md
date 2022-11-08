# Pop-OS Ubuntu tips :

```sh
# Battery: Conservation Mode:
sudo su
# then Activate
echo 1 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode
# or Diactivate
echo 0 > /sys/bus/platform/drivers/ideapad_acpi/VPC2004:00/conservation_mode

```