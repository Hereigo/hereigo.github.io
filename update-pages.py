import os

aPath = os.path.dirname(os.path.abspath(__file__))+'/pages/'
aFiles = os.listdir(aPath)
aFiles.sort()
aRezFile = open('test.html', 'w')

for f in aFiles:
  aRezFile.write('<zero-md src="/pages/' + f + '"></zero-md><hr />' + os.linesep)
