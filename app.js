const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const phrases = ['Tell me your secret',
    'I am Naoto',
    'I love Harry Potter',
    'What is your name',
    'Where are you from'
]

const tries = document.querySelectorAll('.tries');
let letterFound;

var missNumber = 0;

// Overlay disappears by clicking the button
overlay.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});


function getRandomPhraseAsArray(arr) {

    var randomNumber = Math.floor(Math.random() * 5);
    var randomPhrase = arr[randomNumber];
    var arrayOfCharacters = randomPhrase.split('');
    return arrayOfCharacters;
}

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        var listItem = arr[i];
        var listText = document.createTextNode(listItem);
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');
        li.appendChild(listText);
        if (listItem === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }

        ul.appendChild(li);

    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Get a letter from the button that the user click

qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const buttonLetter = e.target.textContent;
        const match = checkLetter(buttonLetter);
        if (!match) {
            tries[missNumber].style.display = 'none';
            missNumber += 1;

            // Lose condition
            if (missNumber >= 5) {
                overlay.style.display = '';
                const h3 = document.createElement('h3');
                const div = document.getElementById('overlay');
                const tryButton = document.getElementsByClassName('btn__reset');
                div.appendChild(h3);
                h3.innerHTML = 'You Lose!';
                for (var i = 0; i < tryButton.length; i += 1) {
                    tryButton[i].innerHTML = 'Try again';
                }
            }
        }
    }
});

// Create a checkLetter function

function checkLetter(buttonLetter) {
    letterFound = false;
    const phrase = document.querySelectorAll('.letter');
    for (let i = 0; i < phrase.length; i += 1) {
        const letter = phrase[i];
        if (buttonLetter === letter.textContent.toLowerCase()) {
            letter.classList.add('show', 'chosen');
            letterFound = true;

            // Win condition
            const ul = document.getElementsByTagName('ul')[0];
            const liWithClassShow = ul.getElementsByClassName('show');
            const letterLength = liWithClassShow.length;
            if (letterLength === phrase.length) {
                overlay.style.display = '';
                const h3 = document.createElement('h3');
                const div = document.getElementById('overlay');
                div.appendChild(h3);
                h3.innerHTML = 'You Win!';



            }
        }
    }
    return letterFound;
}




// Get a letter from the keyboard and pass to the checkLetter function

document.addEventListener('keydown', function (event) {
    checkLetter(event.key);

});
