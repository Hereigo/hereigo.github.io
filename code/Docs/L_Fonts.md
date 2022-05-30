##### For Debian(-Based):
```sh
sudo add-apt-repository multiverse
sudo apt update && sudo apt upgrade -y
sudo apt install -y ttf-mscorefonts-installer
```

##### For a single user, install fonts to : ~/.local/share/fonts/

```sh
yay -S --needed ttf-caladea ttf-carlito ttf-dejavu ttf-liberation ttf-linux-libertine-g noto-fonts adobe-source-code-pro-fonts adobe-source-sans-pro-fonts adobe-source-serif-pro-fonts

sudo dnf install -y 'google-roboto*' 'mozilla-fira*' fira-code-fonts

wget https://fonts.google.com/download?family=PT%20Mono -O ~/Desktop/pt_mono.zip
unzip ~/Desktop/pt_mono.zip

wget https://www.fontsquirrel.com/fonts/download/liberation-mono  -O ~/Desktop/liberation-mono.zip
unzip ~/Desktop/liberation-mono.zip
```

##### To update FONTS CACHE:
```sh
fc-cache -fv
# -f     Force re-generation of apparently up-to-date cache files, overriding the  timestamp checking.
# -r     Erase all existing cache files and rescan.
# -v     Display status information while busy.
# -h     Show summary of options.
```
https://github.com/loafer-mka/anka-coder-fonts

https://www.fontsquirrel.com/fonts/download/BPmono

https://fonts.google.com/specimen/PT+Mono

https://habr.com/ru/post/358992/

https://www.programmingfonts.org
