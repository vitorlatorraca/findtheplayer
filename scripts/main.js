document.addEventListener('DOMContentLoaded', () => {
    const imagem = document.getElementById('imagem');
    const respostaInput = document.getElementById('resposta');
    const verificarBtn = document.getElementById('verificar');
    const mensagem = document.getElementById('mensagem');

    let nomeJogadorCorreto = '';

    // Função para carregar um jogador aleatório
    const carregarJogador = async () => {
        try {
            const response = await fetch('http://localhost:5500/jogador');
            if (!response.ok) {
                throw new Error('Erro ao obter jogador');
            }
            const jogador = await response.json();

            if (!jogador.caminho_imagem) {
                throw new Error('Imagem não encontrada no banco de dados.');
            }

            // Aplica efeito borrado antes de carregar a imagem
            imagem.style.filter = "blur(10px)";
            imagem.style.transition = "filter 0.5s ease-in-out";

            // Define a imagem do jogador corretamente
            imagem.src = jogador.caminho_imagem;

            nomeJogadorCorreto = jogador.nome.toLowerCase();
            mensagem.textContent = ''; // Limpa mensagens anteriores
            respostaInput.value = ''; // Limpa o input

        } catch (error) {
            console.error('❌ Erro ao carregar jogador:', error);
            mensagem.textContent = 'Erro ao carregar jogador. Tente novamente.';
            imagem.src = '/assets/placeholder.jpg'; // Usa um placeholder caso falhe
        }
    };

    // Remove o blur quando a imagem carregar corretamente
    imagem.onload = () => {
        imagem.style.filter = "none";
    };

    // Se a imagem não carregar, define o placeholder
    imagem.onerror = () => {
        console.error('❌ Erro ao carregar a imagem do jogador.');
        imagem.src = '/assets/placeholder.jpg';
    };

    // Verificar a resposta do jogador
    verificarBtn.addEventListener('click', () => {
        const resposta = respostaInput.value.toLowerCase().trim();
        if (resposta === nomeJogadorCorreto) {
            mensagem.textContent = '🎉 Parabéns! Você acertou!';
            mensagem.style.color = 'green';
            setTimeout(carregarJogador, 2000); // Carrega o próximo jogador após 2 segundos
        } else {
            mensagem.textContent = '❌ Tente novamente!';
            mensagem.style.color = 'red';
        }
    });

    // Carregar o primeiro jogador ao carregar a página
    carregarJogador();
});
