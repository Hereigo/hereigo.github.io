const http = require('http');

const host = '127.0.0.1';
const port = 7000;

function notFound(res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
}

const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            switch (req.url) {
                case '/home':
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Home Page\n');
                    break;
                case '/about':
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Home Page\n');
                    break;
                default:
                    notFound(res);
                    break;
            }
            break;

        case 'POST':
            switch (req.url) {
                case '/api/admin':
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Create Admin request\n');
                    break;
                case '/api/user':
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Create User request\n');
                    break;
                default:
                    notFound(res);
                    break;
            }
            break;

        default:
            notFound(res);
            break;
    }
});

server.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
});