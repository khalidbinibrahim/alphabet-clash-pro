function hideElement(hide) {
    const hideElement = document.getElementById(hide);
    hideElement.classList.add('hidden');
}

function showElement(show) {
    const showElement = document.getElementById(show);
    showElement.classList.remove('hidden');
}

function setBackgroundColor(setBackground){
    const setBackgroundColor = document.getElementById(setBackground);
    setBackgroundColor.classList.add('bg-orange-500');
}

function removeBackgroundColor(removeBackground){
    const removeBackgroundColor = document.getElementById(removeBackground);
    removeBackgroundColor.classList.remove('bg-orange-500');
}


function getTextElementValue(getValue){
    const getTextElementValue = document.getElementById(getValue);
    const elementValueText = getTextElementValue.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValue(setValue, value){
    const setTextElementValue = document.getElementById(setValue);
    setTextElementValue.innerText = value;
}

function getElementText(getElement){
    const getElementText = document.getElementById(getElement);
    const text = getElementText.innerText;
    return text;
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}