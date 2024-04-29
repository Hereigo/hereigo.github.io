### Void Start

https://vbtutorials.gitlab.io/void-linux/

#### ffmpeg :
```sh
sudo xbps-install -S void-repo-nonfree
# for х32 apps support:
sudo xbps-install -S void-repo-multilib void-repo-multilib-nonfree

# sys update:

xbps-install -Su

# USB-automount:

sudo xbps-install -S gvfs gvfs-mtp file-roller jmtpfs gamin udisks

# Themes & fonts:

sudo xbps-install -S arc-theme arc-icon-theme lxappearance 
sudo xbps-install -S ttf-ubuntu-font-family freefont-ttf dejavu-fonts-ttf font-awesome5 font-fira-ttf font-ibm-plex-ttf font-symbola fonts-roboto-ttf noto-fonts-ttf
# or
sudo cp fontawesome-webfont.ttf /usr/share/fonts/TTF/ && fc-cache -f -v


# Clear packages-cache:
xbps-remove -yO

# Remove lost packages:
xbps-remove -yo

# Remove old kernels:
vkpurge rm all
```
