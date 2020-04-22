const http = require('http');
const fs = require('fs');
const porta = 3000;

const server = http.createServer(function (req, res) {

    if (req.url === "/") {
        fs.readFile(__dirname + '/form.html', function (e, html) {
            res.writeHead(200, { "Content-type": "text/html" });
            res.write(html)
            res.end();
        });
    } else if (req.url === "/log") {
        fs.readFile(__dirname + '/log.html', function (e, html) {
            res.writeHead(200, { "Content-type": "text/html" });
            res.write(html)
            res.end();
        });
    } else {
        fs.readFile(__dirname + '/erro.html', function (e, html) {
            res.writeHead(200, { "Content-type": "text/html" });
            res.write(html)
            res.end();
        });
    }

});

const servidorLigou = function () {
    console.log("Servidor local está rodando!");
    console.log(`Para acessar abra o link a seguir - http://localhost:${porta}`);
};

server.listen(porta, servidorLigou);