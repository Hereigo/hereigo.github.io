#!/usr/bin/python
# -*- coding: utf-8 -*-
import os

aPath = os.path.dirname(os.path.abspath(__file__))
aFiles = os.listdir(aPath + '/')
aFiles.sort()

os.system(f"rm -rf {aPath}/pages/*")

corrects_shortnames = ["JS", "LN", "PS", "PY"] # list of "startswith" good files

for file in aFiles:
    if file.endswith(".md"):
        starts_with = file[:2] # 2 first letters of file
        if starts_with in corrects_shortnames:
            with open(f"{aPath}/pages/{starts_with}.html", "a") as f:
                f.write(f'<zero-md src="/{file}"></zero-md><hr />' + os.linesep) 
        else:
            with open(f"{aPath}/pages/XZ.html", "a") as f:
                f.write(f'<zero-md src="/{file}"></zero-md><hr />' + os.linesep) 
