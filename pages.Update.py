#!/usr/bin/python
# -*- coding: utf-8 -*-
import os

aPath = os.path.dirname(os.path.abspath(__file__))
aFiles = os.listdir(aPath + '/MD/')
aFiles.sort()

jsRezFile = open(aPath + '/pages/JS.html', 'w')
lnRezFile = open(aPath + '/pages/LN.html', 'w')
psRezFile = open(aPath + '/pages/PS.html', 'w')
pyRezFile = open(aPath + '/pages/PY.html', 'w')
xzRezFile = open(aPath + '/pages/XZ.html', 'w')

for f in aFiles:
    if f.startswith('JS'): jsRezFile.write('<zero-md src="/MD/' + f + '"></zero-md><hr />' + os.linesep)
    elif f.startswith('LN'): lnRezFile.write('<zero-md src="/MD/' + f + '"></zero-md><hr />' + os.linesep)
    elif f.startswith('PS'): psRezFile.write('<zero-md src="/MD/' + f + '"></zero-md><hr />' + os.linesep)
    elif f.startswith('PY'): pyRezFile.write('<zero-md src="/MD/' + f + '"></zero-md><hr />' + os.linesep)
    else: xzRezFile.write('<zero-md src="/MD/' + f + '"></zero-md><hr />' + os.linesep)
