let jogadorAtual;
let embacamento = 10; // O embacamento inicial

// Função para carregar um novo jogador
async function carregarJogador() {
    const resposta = await fetch('http://localhost:3000/jogador');
    const dados = await resposta.json();
    jogadorAtual = dados.nome;
    const imgElement = document.getElementById('imagem');
    imgElement.src = dados.imagem;
    imgElement.style.filter = `blur(${embacamento}px)`; // Aplica o embacamento inicial
    document.getElementById('mensagem').innerText = 'Tente adivinhar o nome do jogador!';
}

// Função para verificar a resposta
document.getElementById('verificar').addEventListener('click', () => {
    const respostaUsuario = document.getElementById('resposta').value.trim();
    const mensagem = document.getElementById('mensagem');

    if (respostaUsuario.toLowerCase() === jogadorAtual.toLowerCase()) {
        mensagem.style.color = 'green';
        mensagem.innerText = 'Você acertou!';
        embacamento = 10; // Resetar o embacamento
        carregarJogador(); // Carregar um novo jogador
    } else {
        embacamento = Math.max(0, embacamento - 1); // Reduzir o embacamento (não deixar negativo)
        document.getElementById('imagem').style.filter = `blur(${embacamento}px)`;
        mensagem.style.color = 'red';
        mensagem.innerText = 'Errou! Tente novamente.';
    }
});

// Carregar o primeiro jogador
carregarJogador();
