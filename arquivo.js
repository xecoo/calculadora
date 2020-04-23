const fs = require('fs');

function gravarConteudoArquivo(texto) {
    const conteudo = texto;
        fs.writeFile("./files/log.txt", conteudo, function (err) {
        if (err) {
            return console.log('erro')
        }
        console.log('Arquivo gravado');
    });
}

function lerArquivo() {
    fs.readFile('log.txt', 'utf8', function (e, data) {
        console.log(data);
    })
}

module.exports={
    gravarConteudoArquivo,
    lerArquivo
}
