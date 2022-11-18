### Python Basics:

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
import os

aPath = os.path.dirname(os.path.abspath(__file__)) + '/myFilesDirectory/'
aFiles = os.listdir(aPath)
aFiles.sort()
aRezFile = open('files_list.txt', 'w')

for f in aFiles:
    aRezFile.write(f + os.linesep)
    
```