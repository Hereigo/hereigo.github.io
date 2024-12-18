﻿### Excellent Utilities

### uBlock Origin,
### for example, may add the following line to the custom filter list to block the popup:
```
||accounts.google.com/gsi/iframe/select$subdocument
```

#### ffmpeg :
```sh
# Crop Skype recorded call:
ffmpeg -i INPUT.mkv -filter:v "crop=1500:900:170:145" OUTPUT.mkv

# split mkv file into parts with duration of 1 hour:
mkvmerge --split duration:01:00:00.000 input_file.mkv -o split.mkv

## Reduce size of ALL video files in a dir
#!/bin/bash
for file in  /home/_USER_/Downloads/Test/*.mp4
do
  ffmpeg -ss 00:00:00 -to 00:59:59 -i "$file" -c:v libx265 -pix_fmt yuv420p -crf 25 -preset fast -tune animation -c:a aac "${file/OLD_PATH/NEW_PATH}"
done
```

- [**Video Trimmer**](https://flathub.org/apps/details/org.gnome.gitlab.YaLTeR.VideoTrimmer)
```sh
flatpak install org.gnome.gitlat.YaLTeR.VideoTrimmer
```

 - [**Mutter-Rounded**](https://github.com/yilozt/mutter-rounded) - - Similar with "Rounded Window Corners" gnome-ext

**Battery Tools:**

[*Powertop*](https://medium.com/geekculture/how-to-increase-battery-life-time-on-linux-laptops-7c15383a19a5),
[*Laptop Mode Tools*](https://wiki.archlinux.org/title/Laptop_Mode_Tools),
[*Optimize Battery*](https://trisquel.info/en/wiki/optimizing-battery-time),
[*Battery Life*](https://www.maketecheasier.com/increase-linux-laptop-battery-life/)

**Other Tools:**

 - [**Abricotine**](https://www.linuxlinks.com/excellent-utilities-abricotine-open-source-markdown-editor/) --- Markdown editor with inline preview functionality
 - [**Ananicy**](https://www.linuxlinks.com/excellent-utilities-ananicy-auto-nice-daemon/) --- Shell daemon created to manage processes’ IO and CPU priorities
 - [**broot**](https://www.linuxlinks.com/excellent-utilities-broot-next-gen-tree-explorer/) --- Next gen tree explorer and customizable launcher
 - [**cheat.sh**](https://www.linuxlinks.com/excellent-utilities-cheat-sh-community-driven-cheat-sheet/) --- Community driven unified cheat sheet
 - [**CopyQ**](https://www.linuxlinks.com/excellent-utilities-copyq-advanced-clipboard-manager/) --- Advanced clipboard manager
 - [**croc**](https://www.linuxlinks.com/excellent-utilities-croc-securely-transfer-files-folders/) --- Securely transfer files and folders from the command-line
 - [**Czkawka**](https://github.com/qarmin/czkawka) - - Anti-Duplicator
 - [**CzkawkaGUI**](https://appimage.github.io/linux_czkawka_gui/)
 - [**deDuplicator**](https://github.com/sreedevk/deduplicator) - - Anti-Duplicator 2
 - [**Deskreen**](https://www.linuxlinks.com/excellent-utilities-deskreen-live-streaming-desktop/) --- Live streaming your desktop to a web browser
 - [**DicEngOffline**](https://www.debugpoint.com/wordbook-offline-dictionary/) --- WordBook - Offline English Dictionary App for GNOME
 - [**duf**](https://www.linuxlinks.com/excellent-utilities-duf-disk-usage-utility/) --- Disk usage utility with more polished presentation than the classic df
 - [**exa**](https://www.linuxlinks.com/excellent-utilities-exa-replacement-ls/) --- A turbo-charged alternative to the venerable ls command
 - [**Extension Manager**](https://www.linuxlinks.com/excellent-utilities-extension-manager-browse-install-manage-gnome-shell-extensions/) --- Browse, install and manage GNOME Shell Extensions
 - [**fd**](https://www.linuxlinks.com/excellent-utilities-fd-superior-alternative-find/) --- Wonderful alternative to the venerable find
 - [**fkill**](https://www.linuxlinks.com/excellent-utilities-fkill-kill-processes-quick-easy/) --- Kill processes quick and easy
 - [**fontpreview**](https://www.linuxlinks.com/excellent-utilities-fontpreview-search-preview-fonts/) --- Quickly search and preview fonts
 - [**horcrux**](https://www.linuxlinks.com/excellent-utilities-horcrux-file-splitter/) --- File splitter with encryption and redundancy
 - [**Imagine**](https://www.linuxlinks.com/excellent-utilities-imagine-image-optimization/) --- A simple yet effective image optimization tool
 - [**LanguageTool**](https://www.linuxlinks.com/excellent-utilities-languagetool-style-and-grammar-checker/) --- Style and grammar checker for 30+ languages
 - [**Liquid Prompt**](https://www.linuxlinks.com/excellent-utilities-liquid-prompt-adaptive-prompt-bash-zsh/) --- Adaptive prompt for Bash & Zsh
 - [**lnav**](https://www.linuxlinks.com/excellent-utilities-lnav-log-file-navigator/) --- Advanced log file viewer for the small-scale; great for troubleshooting
 - [**lsd**](https://www.linuxlinks.com/excellent-utilities-lsd-next-gen-ls-command/) --- Like exa, lsd is a turbo-charged alternative to ls
 - [**McFly**](https://www.linuxlinks.com/excellent-utilities-mcfly-navigate-shell-history/) --- Navigate through your bash shell history
 - [**mdless**](https://www.linuxlinks.com/excellent-utilities-mdless-formatted-highlighted-view-markdown-files/) --- Formatted and highlighted view of Markdown files
 - [**OCRmyPDF**](https://www.linuxlinks.com/excellent-utilities-ocrmypdf-add-ocr-text-layer-scanned-pdfs/) --- Add OCR text layer to scanned PDFs
 - [**Paperwork**](https://www.linuxlinks.com/excellent-utilities-paperwork-personal-document-manager/) --- Designed to simplify the management of your paperwork
 - [**PDF Mix Tool**](https://www.linuxlinks.com/excellent-utilities-pdf-mix-tool/) --- Perform common editing operations on PDF files
 - [**peco**](https://www.linuxlinks.com/excellent-utilities-peco-interactive-filtering-tool/) --- Simple interactive filtering tool that's remarkably useful
 - [**Rembg**](https://github.com/danielgatis/rembg) - - remove images background.
 - [**ripgrep**](https://www.linuxlinks.com/excellent-utilities-ripgrep-recursively-search-directories-regex-pattern/) --- Recursively search directories for a regex pattern
 - [**scrcpy**](https://www.linuxlinks.com/excellent-utilities-scrcpy-display-control-android-devices/) --- Display and control Android devices
 - [**shutterEncoder**](https://www.shutterencoder.com/en/) - - Conversion tool between video, audio and image formats.
 - [**slashbase**](https://github.com/slashbaseide/slashbase) - - Web-based DB IDE.
 - [**tldr**](https://www.linuxlinks.com/excellent-utilities-tldr-simplified-community-driven-man-pages/) --- Simplified and community-driven man pages
 - [**tmux**](https://www.linuxlinks.com/excellent-utilities-tmux-terminal-multiplexer-software/) --- A terminal multiplexer that offers a massive boost to your workflow
 - [**Tusk**](https://www.linuxlinks.com/excellent-utilities-tusk-evernote-desktop-software/) --- An unofficial Evernote client with bags of potential
 - [**Ulauncher**](https://www.linuxlinks.com/excellent-utilities-ulauncher-application-launcher-linux/) --- Sublime application launcher
 - [**Watson**](https://www.linuxlinks.com/excellent-utilities-watson-cli-tool-track-time/) --- Track the time spent on projects
 - [**Whoogle Search**](https://www.linuxlinks.com/excellent-utilities-whoogle-search-self-hosted-metasearch-engine/) --- Self-hosted and privacy-focused metasearch engine
 - [**Lynis**](https://www.geeksforgeeks.org/lynis-security-tool-for-audit-and-hardening-linux-systems/) - - Secur Tool for Audit and Hardening Lin

**Much More Recommended Software**
https://www.linuxlinks.com/best-free-open-source-software/

#### 7z cli compress:
```sh
:'
a                   Add (dir1 to archive.7z)
-t7z                Use a 7z archive
-m0=lzma2           Use lzma2 method
-mx=9               Use the '9' level of compression = Ultra
-mfb=64             Use number of fast bytes for LZMA = 64
-md=32m             Use a dictionary size = 32 megabytes
-ms=on              Solid archive = on
-mhe=on             7z format only : enables or disables archive header encryption
-p{Password}        Add a password
'
7z a -t7z -m0=lzma2 -mx=9 -mfb=64 -md=32m -ms=on -mhe=on -p AAAA.7z dir1
```
