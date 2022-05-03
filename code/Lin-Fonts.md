##### For Debian(-Based):
```sh
sudo add-apt-repository multiverse
sudo apt update && sudo apt upgrade -y
sudo apt install -y ttf-mscorefonts-installer
```

##### For a single user, install fonts to : ~/.local/share/fonts/

```sh
wget https://fonts.google.com/download?family=PT%20Mono -O ~/Desktop/PT_Mono.zip
unzip ~/Desktop/PT_Mono.zip
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