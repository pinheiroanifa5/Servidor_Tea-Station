const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs'); // Configure a engine de visualização EJS
app.set('view', path.join(__dirname,'views'));
// Configurar o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/tea', (req, res) => {
  res.render('tea', { bestSellingTea: 'Green Tea' });
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Página Inicial', message: 'Bem-vindo à Tea Station' });
});

// Rota de erro 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
  console.log(`Servidor a executar na porta ${port}`);
});
