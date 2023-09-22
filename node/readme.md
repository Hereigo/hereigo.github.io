### Beginning.
```bash

npm init
npm install --save express # body-parser ...
npm install --save-dev nodemon # auto-restarter after save:
# add it to package.json
#   "scripts": { "dev": "nodemon server.js", ...
npm run dev
# or 
# node server.js # (if without Nodeman)
```

#### Base Express.js app.
```js
var express=require('express');
var app=express();
app.get('/',function(req,res){ res.send('Hello!'); });
var server=app.listen(3000,function() {});
```

#### Jade
```bash
npm install jade
# add file - .\views\index.jade
# 
#html 
#  head 
#    title!=title 
#    body 
#      h1=message
```

#### MongoDB
```bash
npm install mongodb
# 1. module.exports = { url: "mongodb://...
# 2. const dbcfg = require('./config/db'); var url = dbcfg.url;
# 3. add config/db.js and .gitignore it !!!
```
