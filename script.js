let wordsInDictionary = ["mancare", "piramida", "abecedar", "cartof", "programare", "mizerie"];

function saveWord() {
    let input = document.querySelector('.form-control');
    let word = input.value.trim();
    wordsInDictionary.push(word);
    alert ('You introduced the word "' + word + '" in the dictionary.');
    input.value = '';
}

function searchWord() {
    let found = false;
    let input = document.querySelector('.form-control');
    let word = input.value.trim();
    for (let currentWord of wordsInDictionary) {
        if(word.toLowerCase() == currentWord.toLowerCase()) {
            found = true;
        }
    }
    if (found) {
        alert('Word found');
    } else {
        alert('Word not found');
    }
}
