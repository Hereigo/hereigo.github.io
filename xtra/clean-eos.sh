echo " >>> Start Cleaning deprecated files..."

# Remove orphaned packages
sudo pacman -Qtdq | sudo pacman -Rns

# Remove backuped packages more then 1 versions in cache
sudo paccache -rk1 

# Remove uninstalled packages in cache
sudo paccache -ruk0

# Clean go cache
if type go &> /dev/null; then
  echo "Cleaning go caches"
  go clean -cache
  go clean -fuzzcache
  go clean -modcache
fi

# Clean rust cache
# https://github.com/rust-lang/cargo/issues/3289#issuecomment-1086844583
if [ -e ~/.cargo/registry ]; then
  echo "Cleaning Rust cache"
  rm -r ~/.cargo/registry/{cache,src}
fi

# Clean npm cache
if type npm &> /dev/null; then
  echo "Cleaning npm cache"
  npm cache clean --force
fi

# Clean spotify cache
if [ -e ~/.cache/spotify ]; then
  echo "Cleaning Spotify cache"
  rm -r ~/.cache/spotify/Data/*
fi

echo " >>> Cleaning deprecated files finished."

