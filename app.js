const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost', // Substitua pelo endereço do seu servidor MySQL
    user: 'root', // Substitua pelo seu usuário do MySQL
    password: 'sua_senha', // Substitua pela sua senha do MySQL
    database: 'game1' // Substitua pelo nome do seu banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
        return;
    }
    console.log('Conexão com o banco de dados bem-sucedida!');
});

// Consultar dados da tabela 'jogadores'
connection.query('SELECT * FROM jogadores', (err, results) => {
    if (err) {
        console.error('Erro ao executar consulta:', err.message);
        return;
    }
    console.log('Jogadores:', results);
});

// Fechar a conexão
connection.end();
