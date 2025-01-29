const express = require('express');
const path = require('path');
const jogadorRoutes = require('./routes/jogadorRoutes');

const app = express();

// Servir arquivos estáticos (imagens, estilos, scripts, jogos)
app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use('/styles', express.static(path.join(__dirname, '../styles')));
app.use('/scripts', express.static(path.join(__dirname, '../scripts')));
app.use('/jogos', express.static(path.join(__dirname, '../jogos')));

// Rotas
app.use('/jogador', jogadorRoutes);

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Iniciar servidor
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
