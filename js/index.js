function KeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    if (playerPressed === 'Escape') {
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {
        console.log('you got a point!');

        const currentScore = getTextElementValue('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValue('current-score', updatedScore);

        const newScore = currentScore + 1;

        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else {
        const currentLife = getTextElementValue('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValue('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', KeyboardKeyUpEvent);

function continueGame() {
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);
}

function play() {
    hideElement('home-screen');
    hideElement('final-score');
    showElement('play-ground');

    setTextElementValue('current-life', 5);
    setTextElementValue('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElement('play-ground');
    showElement('final-score');

    const lastScore = getTextElementValue('current-score');
    console.log(lastScore);
    setTextElementValue('last-score', lastScore);

    const currentAlphabet = getElementText('current-alphabet');
    removeBackgroundColor(currentAlphabet);
}