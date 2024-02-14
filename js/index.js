function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log( 'player pressed', playerPressed)

    if(playerPressed === 'Escape'){
        gameOver();
    }

    if(playerPressed === 'Enter'){
        play();
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
        console.log('dhurrr vaiya va apu...right key press koro');

        const currentLife = getTextElementValue('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValue('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

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

function backHome() {
    hideElement('final-score');
    hideElement('play-ground');
    showElement('home-screen');
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