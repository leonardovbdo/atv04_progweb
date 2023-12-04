const express = require('express');
const app = express();

// Middleware para servir arquivos estáticos (formulário HTML)
app.use(express.static('public'));

// Rota para obter o tempo restante do dia
app.get('/tempo-restante', (req, res) => {
    const formatoResposta = req.query.formato || 'segundos';

    // Obtenha a hora atual
    const agora = new Date();
    const horasRestantes = 23 - agora.getHours();
    const minutosRestantes = 59 - agora.getMinutes();
    const segundsoRestantes = 59 - agora.getSeconds();

    // Calcule o tempo restante em segundos
    const tempoRestanteSegundos = horasRestantes * 3600 + minutosRestantes * 60 + segundsoRestantes;

    // Responde com o tempo restante no formato especificado
    switch (formatoResposta) {
        case 'horas':
            res.send(`${horasRestantes} horas restantes`);
            break;
        case 'minutos':
            res.send(`${minutosRestantes} minutos restantes`);
            break;
        case 'segundos':
            res.send(`${segundsoRestantes} segundos restantes`);
            break;
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});