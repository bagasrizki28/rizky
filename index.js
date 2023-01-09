import http from 'http';

const server = http.createServer((req, res) => {
    res.end("Bagas");
});

server.listen(3000);

console.log("Server sedang berjalan");