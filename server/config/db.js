const mysql = require('mysql2');

// Configuração do banco de dados
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'georgiancollege!!10',
    database: process.env.DB_NAME || 'game1',
    port: process.env.DB_PORT || '3306'
});

// Conectar ao banco de dados
connection.connect(err => {
    if (err) {
        console.error('❌ Erro ao conectar ao banco de dados:', err.message);
        process.exit(1);
    }
    console.log('✅ Conexão com o banco de dados bem-sucedida!');
});

module.exports = connection;
