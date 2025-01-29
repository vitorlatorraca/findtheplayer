const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// Rota para obter um jogador aleatório
router.get('/', (req, res) => {
    const query = `
        SELECT jogadores.nome, imagens.caminho_imagem
        FROM jogadores
        INNER JOIN imagens ON jogadores.id = imagens.jogador_id
        ORDER BY RAND() LIMIT 1;
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('❌ Erro ao executar consulta:', err.message);
            return res.status(500).json({ error: 'Erro ao obter jogador.' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Nenhum jogador encontrado.' });
        }

        let jogador = results[0];

        // Corrige o caminho da imagem para garantir que o Express está servindo corretamente
        jogador.caminho_imagem = `http://localhost:5500/assets/${jogador.caminho_imagem}`;

        res.json(jogador);
    });
});

module.exports = router;
