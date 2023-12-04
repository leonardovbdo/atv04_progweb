const express = require('express');
const app = express();

function getNumeroRandomico(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

app.get('/', (req, res) => {
    const numeroAleatorios = Array.from({ length: 10 }, () => getNumeroRandomico(1, 100));
    const respostaTexto = numeroAleatorios.join('<br>');
    res.send(respostaTexto);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});