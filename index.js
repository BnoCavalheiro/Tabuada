import express from 'express';

const host = '0.0.0.0';
const porta=5000;
const app = express();

function exibirTabuada(requisicao, resposta) {
    let tabuada = parseInt(requisicao.query.tabuada);
    let sequencia = parseInt(requisicao.query.sequencia) || 10;

    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');

    resposta.write('<h1>Tabuada do ' + tabuada + '</h1>');
    resposta.write('<ul>');

    for (let i = 0; i <= sequencia; i++) {
        resposta.write('<li>' + tabuada + ' x ' + i + ' = ' + (tabuada * i) + '</li>');
    }

    resposta.write('</ul>');
    resposta.write('</body>');
    resposta.write('</html>');

    resposta.end();
}

app.get("/tabuada",exibirTabuada);
app.listen(porta, host, () =>{
    console.log("Servidor está executando em http://" + host + ":" + porta);
});