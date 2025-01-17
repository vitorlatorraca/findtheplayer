const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RafaelLeao17.', // Substitua pela sua senha
    database: 'game1'
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
        return;
    }
    console.log('Conexão com o banco de dados bem-sucedida!');
});

// Servir arquivos estáticos da pasta "assets"
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Endpoint para obter um jogador aleatório
app.get('/jogador', (req, res) => {
    const query = `
        SELECT jogadores.nome, imagens.caminho_imagem 
        FROM jogadores 
        INNER JOIN imagens ON jogadores.id = imagens.jogador_id 
        ORDER BY RAND() LIMIT 1
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao executar consulta:', err.message);
            res.status(500).send('Erro ao obter jogador');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Nenhum jogador encontrado.');
            return;
        }
        res.json(results[0]); // Retorna o jogador aleatório
    });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
