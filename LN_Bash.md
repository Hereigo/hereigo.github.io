### Bash tips :

#### Convert webp-images into files.png (libwebp is required)
```sh
#!/bin/bash
for filename in ~/Documents/*.webp; do
    dwebp $filename -o $filename'.png'
done
```