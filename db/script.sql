USE game1;

CREATE TABLE jogadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE imagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jogador_id INT NOT NULL,
    caminho_imagem VARCHAR(255) NOT NULL,
    FOREIGN KEY (jogador_id) REFERENCES jogadores(id)
);
INSERT INTO jogadores (nome) 
VALUES 
('Pelé'), ('Zico'), ('Romário'), ('Ronaldo Fenômeno'), ('Sócrates'), ('Cafu'), ('Dunga'), ('Falcão'), 
('Garrincha'), ('Rivelino'), ('Júnior'), ('Tostão'), ('Zico'), ('Falcão'), ('Rivellino'), ('Careca'), 
('César Sampaio'), ('Cacá'), ('Aldair'), ('Denílson'), ('Gilmar'), ('Bebeto'), ('Kaká'), ('Neymar'), 
('Djalma Santos'), ('Carlos Alberto Torres'), ('Luciano'), ('Roberto Carlos'), ('Marcelo'), ('Vavá'), 
('Gérson'), ('Coutinho');

INSERT INTO imagens (jogador_id, caminho_imagem) VALUES
(1, 'imagens/pele.jpg'),
(2, 'imagens/zico.jpg'),
(3, 'imagens/romario.jpg'),
(4, 'imagens/ronaldo.jpg'),
(5, 'imagens/socrates.jpg'),
(6, 'imagens/cafu.jpg'),
(7, 'imagens/dunga.jpg'),
(8, 'imagens/falcao.jpg'),
(9, 'imagens/garrincha.jpg'),
(10, 'imagens/rivelino.jpg'),
(11, 'imagens/junior.jpg'),
(12, 'imagens/tostao.jpg'),
(13, 'imagens/zico.jpg'),
(14, 'imagens/falcao.jpg'),
(15, 'imagens/rivellino.jpg'),
(16, 'imagens/careca.jpg'),
(17, 'imagens/cesar_sampaio.jpg'),
(18, 'imagens/caca.jpg'),
(19, 'imagens/aldair.jpg'),
(20, 'imagens/denilson.jpg'),
(21, 'imagens/gilmar.jpg'),
(22, 'imagens/bebeto.jpg'),
(23, 'imagens/kaka.jpg'),
(24, 'imagens/neymar.jpg'),
(25, 'imagens/djalma_santos.jpg'),
(26, 'imagens/carlos_alberto_torres.jpg'),
(27, 'imagens/luciano.jpg'),
(28, 'imagens/roberto_carlos.jpg'),
(29, 'imagens/marcelo.jpg'),
(30, 'imagens/vava.jpg'),
(31, 'imagens/gerson.jpg'),
(32, 'imagens/coutinho.jpg');

SET SQL_SAFE_UPDATES = 0;

UPDATE imagens 
SET caminho_imagem = REPLACE(caminho_imagem, 'imagens/', 'assets/');

SET SQL_SAFE_UPDATES = 1;

