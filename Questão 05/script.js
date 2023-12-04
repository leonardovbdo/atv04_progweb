const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos (formulário)
app.use(express.static('public'));

// Rota para obter informações sobre a data e/ou horário corrente
app.get('/info-instante-atual', (req, res) => {
  // Captura o parâmetro da string de consulta (query string)
  const parametro = req.query.parametro;

  // Obtém a data e/ou horário corrente com base no parâmetro fornecido
  const informacaoInstanteAtual = obterInformacaoInstanteAtual(parametro);

  // Envia a resposta ao cliente
  res.send(informacaoInstanteAtual);
});

function obterInformacaoInstanteAtual(parametro) {
  const agora = new Date();
  let informacao = '';

  switch (parametro) {
    case 'dma':
      // Data (dia, ano e mês em formato numérico) 20/07/2022
      informacao = `${agora.getDate()}/${agora.getMonth() + 1}/${agora.getFullYear()}`;
      break;
    case 'ds':
      // Nome do dia da semana Quarta
      const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
      informacao = diasDaSemana[agora.getDay()];
      break;
    case 'dmahms':
      // Data, horas, minutos e segundos 20/07/2022 19:30:25
      informacao = `${agora.getDate()}/${agora.getMonth() + 1}/${agora.getFullYear()} ${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`;
      break;
    case 'hms':
      // Horas, minutos e segundos 19:30:25
      informacao = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`;
      break;
    default:
      informacao = `Data e Hora Atual: ${agora.toString()}`;
  }

  return informacao;
}


// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
