let http = require("http");
let fs = require('fs');

const server = http.createServer((request, response) => {
    let path = request.url;
    if (path.toLowerCase() === '/home')
        response.end("Welcome to my website");
    else if (path.toLowerCase() === '/pdf') {
        fs.readFile('./File/MyFile.pdf', (err, data) => {
            if (err) {
                response.writeHead(400, { 'Content-type': 'text/html' })
                console.log(err);
                response.end("No such file");
            } else {
                response.writeHead(200, { 'Content-type': 'application/pdf' });
                response.end(data);
            }
        })
    }
    else if (path.toLowerCase() === '/image') {
        fs.readFile('./File/fall.jpeg', (err, data) => {
            if (err) {
                response.writeHead(400, { 'Content-type': 'text/html' })
                console.log(err);
                response.end("No such image");
            } else {
                response.writeHead(200, { 'Content-type': 'image/jpg' });
                response.end(data);
            }
        })
    }
    else {
        response.writeHead(404);
        response.end("Error 404: Page not found");
    }
})

server.listen(3000, '172.28.192.1', () => {
    console.log('Server has started...');
}); //listen on port 3000 on my ip address of 172.28.192.1