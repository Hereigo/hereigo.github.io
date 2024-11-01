### Bash tips :

#### BKP Thunderbird
```sh
7z a -r -t7z -ms=on -m0=lzma2 -mx=9 -mhe -p ~/Desktop/BKP_Thund_Cfgs.7z ~/.thunderbird/ ~/.config/dconf/ ~/.config/gtk-2.0/ ~/.config/gtk-3.0/ ~/.config/gtk-4.0/ ~/.config/gxkb/ ~/.config/libfm/ ~/.config/menus/ ~/.config/MX-Linux/ ~/.config/neofetch/ ~/.config/nomacs ~/.config/sunflower/ ~/.config/Thunar/ ~/.config/xfce4/ ~/.config/xfce-superkey/ ~/.config/apt-notifierrc ~/.config/*.* ~/.fonts/ ~/.restore/

```

#### Convert webp-images into files.png (libwebp is required)
```sh
#!/bin/bash
for filename in ~/Documents/*.webp; do
    dwebp $filename -o $filename'.png'
done
```

#### Reduce size of ALL video files in a dir
```sh
#!/bin/bash
for file in ~/Downloads/Test/*.mp4
do
  ffmpeg -ss 00:00:00 -to 00:59:59 -i "$file" -c:v libx265 -c:a copy -x265-params crf=25 "${file/OLD_PATH_PART/NEW_PATH_PART}"
done
```

#### 72 Networking Commands:
```sh
arp - see your arp table.
aria2 – downloading just about everything. Torrents included.
arpwatch – Ethernet Activity Monitor.
bmon – bandwidth monitor and rate estimator.
bwm-ng – live network bandwidth monitor.
curl – transferring data with URLs.(or try httpie).
darkstat – captures network traffic, usage statistics.
dhclient – Dynamic Host Configuration Protocol Client.
dig – query DNS servers for information.
dstat – replacement for vmstat, iostat, mpstat, netstat and ifstat.
ethtool – utility for controlling network drivers and hardware.
gated – gateway routing daemon.
host – DNS lookup utility.
hping – TCP/IP packet assembler/analyzer.
ibmonitor – shows bandwidth and total data transferred.
ifstat – report network interfaces bandwidth.
iftop – display bandwidth usage.
ip – a command with more features than ifconfig.
iperf3 – network bandwidth measurement tool.
iproute2 – collection of utilities for controlling TCP/IP.
iptables – take control of network traffic.
IPTraf – An IP Network Monitor.
iputils – set of small useful utilities for Linux networking.
iw – a new nl80211 based CLI configuration utility → for wireless devices.
jwhois (whois) – client for the whois service.
lsof -i – reveal information about your network sockets.
mtr – network diagnostic tool.
net-tools – arp, hostname, ifconfig, netstat, rarp, route, plipconfig, slattach, iptunnel...
ncat – improved re-implementation of the venerable netcat.
netcat – networking utility for reading/writing network connections.
nethogs – a small ‘net top’ tool.
Netperf – Network bandwidth Testing.
netplan – Netplan is a utility for easily configuring.
networking on a linux system.
netsniff-ng – Swiss army knife for daily Linux network plumbing.
netwatch – monitoring Network Connections.
ngrep – grep applied to the network layer.
nload – display network usage.
nmap – network discovery and security auditing.
nmcli – a command-line tool for controlling NetworkManager and reporting network status.
nmtui – provides a text interface to configure networking by controlling NetworkManager.
nslookup – query Internet name servers interactively.
ping – send icmp echo_request to network hosts to test connectivity.
route – show / manipulate the IP routing table.
slurm – network load monitor.
snort – Network Intrusion Detection and Prevention System.
smokeping – keeps track of your network latency.
socat – establishes two bidirectional byte streams and transfers data between them.
speedometer – Measure and display the rate of data across a network.
speedtest-cli – test internet bandwidth using speedtest.net
ss – utility to investigate sockets.
ssh – secure system administration and file transfers over insecure networks.
tcpdump – command-line packet analyzer.
tcptrack – Displays information about tcp connections on a network interface.
telnet – user interface to the TELNET protocol.
tracepath – very similar function to traceroute.
traceroute – print the route packets trace to network host.
vnStat – network traffic monitor.
websocat – Connection forwarder from/to web sockets to/from usual sockets, in style of socat.
wget – retrieving files using HTTP, HTTPS, FTP and FTPS.
iwconfig - similar to ifconfig, but is dedicated to the wireless interfaces.
iwlist - used to display additional info from a wifi interface that is not displayed by iwconfig.
iwspy - used to set a list of addresses to monitor in a wireless interface and to read back quality
iwpriv - used to manipulate parameters and setting of the Wireless Extension specific to each driver
ifrename - is a tool that allows you to assign a consistent name to each of your network interface.
Wireshark – network protocol analyzer.
netstat - displays TCP connections, routing and a variety of network and protocol statistics.
ifconfig - stands for "interface configuration." to view and change the configuration of the network.
iwgetid - used to find out the NWID, ESSID or AP/Cell Address of the wifi that is currently used.
iwevent - displays Wireless Events received through the RTNetlink socket
route - allows you to make manual entries into the network routing tables.
hostname - used to obtain the DNS(Domain Name System) name and set the system s hostname.
```