const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('hello.txt', (err, fileData) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fileData);
        return res.end();
    })
}).listen(3000);

console.log('Serv er listening on http://localhost:3000');
