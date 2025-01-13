let blurLevel = 8; // Começa com 8px de borrão

function reduceBlur() {
    if (blurLevel > 0) {
        blurLevel -= 1; // Reduz 1px de borrão
        document.getElementById('playerImage').style.filter = `blur(${blurLevel}px)`;
    }
}

function checkAnswer() {
    const userGuess = document.getElementById('guess').value.toLowerCase();
    const correctAnswer = 'ronaldo'; // Mock para testes
    const feedback = userGuess === correctAnswer ? 'Você acertou!' : 'Tente novamente!';
    document.getElementById('feedback').textContent = feedback;
}

//criando node
