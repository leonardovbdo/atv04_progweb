const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

// Configurar Nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

// Função para gerar números pseudoaleatórios
function getNumeroRandomico(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Rota para lidar com requisições HTTP
app.get('/', (req, res) => {
  // Gerar sequência de 10 números pseudoaleatórios
  const numeros = Array.from({ length: 10 }, () => getNumeroRandomico(1, 100));

  // Renderizar o template utilizando Nunjucks
  res.render('index.njk', { numeros });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
