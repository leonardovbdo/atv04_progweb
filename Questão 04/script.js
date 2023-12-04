const express = require('express');
const app = express();

// Middleware para servir arquivos estáticos (formulário HTML)
app.use(express.static('public'));

// Função para calcular o enésimo termo da série de Fibonacci de forma eficiente
function fibonacci(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;

    let a = 0, b = 1;
    for (let i = 3; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Rota para obter o valor do enésimo termo da série de Fibonacci
app.get('/fibonacci', (req, res) => {
  const posicao = parseInt(req.query.posicao) || 0; // Valor padrão: 0
  const resultado = fibonacci(posicao);

  // Responder em formato JSON
  res.json({ posicao, resultado });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
