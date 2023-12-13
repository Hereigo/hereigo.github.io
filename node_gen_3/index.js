const http = require('http');
const fs = require('fs');
const { readFile, appendFile, writeFile } = require('fs/promises');
// writeFile - can creates file if not exists.

async function appendFileAsync(filePath, writeData) {

    try {
        await appendFile(filePath, writeData, { flag: 'a' }); // 'w'
        console.log('Appended successfully.');
    } catch (error) {
        console.error('File appending error: ', error);
    }
}

async function readFileAsync(filePath) {
    try {
        const fileData = await readFile(filePath);
        console.log(fileData.toString());
    } catch (error) {
        console.error('File reading error: ', error);
    }
}

// TEST
readFileAsync('hello.txt');
appendFileAsync('hello.txt', 'New appended text...\r\n');
readFileAsync('hello.txt');

http.createServer(function (req, res) {
    // fs.readFileSync - Not Recommended for Express!!!
    fs.readFile('hello.txt', (err, fileData) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fileData);
        return res.end();
    })
}).listen(3000);

console.log('Server is listening on http://localhost:3000');
