const express = require('express');
const app = express();

function getNumeroRandomico(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

app.get('/numeros-aleatorios', (req, res) => {
    const quantidade = parseInt(req.query.quantidade) || 10; // Valor padrão: 10 números
    const numeroAleatorios = Array.from({ length: quantidade }, () => getNumeroRandomico(1, 100));
    const respostaTexto = numeroAleatorios.join('<br>');
    res.send(respostaTexto);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

/* 
    tente: http://localhost:3000/numeros-aleatorios?quantidade=6
    tente: http://localhost:3000/numeros-aleatorios?quantidade=3
*/