document.addEventListener('DOMContentLoaded', () => {
    const imagem = document.getElementById('imagem');
    const respostaInput = document.getElementById('resposta');
    const verificarBtn = document.getElementById('verificar');
    const mensagem = document.getElementById('mensagem');

    let nomeJogadorCorreto = '';
    let blurLevel = 10; // Inicia com 10% de desfoque

    // Função para carregar um jogador aleatório
    const carregarJogador = async () => {
        try {
            const response = await fetch('http://localhost:3000/jogador'); // API do backend
            const jogador = await response.json();
            imagem.src = jogador.caminho_imagem; // Atualiza a imagem
            nomeJogadorCorreto = jogador.nome.toLowerCase(); // Nome do jogador correto
            blurLevel = 10; // Reseta o desfoque inicial
            imagem.style.filter = `blur(${blurLevel}px)`; // Aplica o desfoque
        } catch (error) {
            console.error('Erro ao carregar jogador:', error);
            mensagem.textContent = 'Erro ao carregar jogador. Tente novamente!';
        }
    };

    // Evento para verificar a resposta
    verificarBtn.addEventListener('click', () => {
        const resposta = respostaInput.value.toLowerCase().trim();
        if (resposta === nomeJogadorCorreto) {
            mensagem.textContent = 'Parabéns! Você acertou!';
            mensagem.style.color = 'green';
            imagem.style.filter = 'blur(0px)'; // Remove o desfoque
        } else {
            mensagem.textContent = 'Errou! Tente novamente.';
            mensagem.style.color = 'red';
            blurLevel = Math.max(blurLevel - 1, 0); // Reduz o desfoque (limite 0)
            imagem.style.filter = `blur(${blurLevel}px)`;
        }
        respostaInput.value = ''; // Limpa o campo de resposta
    });

    // Carregar o primeiro jogador ao abrir a página
    carregarJogador();
});
