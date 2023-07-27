### Fedora tips :

```sh
# BOOT WIN DEFAULT:

- grub2-set-default "Windows Boot Manager (on /dev/sdb1)"

# REMMINA:

- dnf copr enable hubbitus/remmina-next
- dnf upgrade --refresh 'remmina*' 'freerdp*'
- dnf install remmina freerdp

# SKYPE:

- curl -o /etc/yum.repos.d/skype-stable.repo https://repo.skype.com/rpm/stable/skype-stable.repo
- dnf install skypeforlinux

# FLATPAK:

du -hs /var/lib/flatpak  # Total Flatpaks size

flatpak list --show-details  # All Flatpaks details

flatpak uninstall --unused  # Remove unused packages

```