import os

aPath = os.path.dirname(os.path.abspath(__file__))+'/pages/'

aRezFile = open('test.html', 'w')

for path, subdirs, files in os.walk(aPath):
   for filename in files:
     f = os.path.join(path, filename)
     aRezFile.write(str(f) + os.linesep) 

# print(aPath)