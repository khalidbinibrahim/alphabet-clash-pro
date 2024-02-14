function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(backgroundId) {
    const setBackground = document.getElementById(backgroundId);
    setBackground.classList.add('bg-orange-500');
}

function removeBackgroundColor(backgroundId) {
    const removeBackground = document.getElementById(backgroundId);
    removeBackground.classList.remove('bg-orange-500');
}


function getTextElementValue(textId) {
    const getText = document.getElementById(textId);
    const textValue = getText.innerText;
    const value = parseInt(textValue);
    return value;
}

function setTextElementValue(textId, value) {
    const setText = document.getElementById(textId);
    setText.innerText = value;
}

function getElementText(getText) {
    const getText = document.getElementById(getText);
    const text = getText.innerText;
    return text;
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}