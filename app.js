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

let phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Get a letter from a keyboard that the user clicks and pass to the checkLetter function

qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const buttonLetter = e.target.textContent;
        const buttonElement = e.target;
        const match = checkLetter(buttonLetter, buttonElement);

        const phrase = document.querySelectorAll('.letter');
        const ul = document.getElementsByTagName('ul')[0];
        const liWithClassShow = ul.getElementsByClassName('show');
        const letterLength = liWithClassShow.length;


        if (!match) {
            tries[missNumber].style.display = 'none';
            missNumber += 1;
            buttonElement.classList.add('chosen_fail');
        }

        // Win condition
        if (letterLength === phrase.length) {
            overlay.style.display = '';
            const h3 = document.createElement('h3');
            const div = document.getElementById('overlay');
            const againButton = document.getElementsByClassName('btn__reset');
            div.classList.add('win');
            div.appendChild(h3);
            h3.innerHTML = 'You Win!';
            for (let i = 0; i < againButton.length; i += 1) {
                againButton[i].innerHTML = 'Play again';
            }
            // Remove the old phrase and classes
            ul.innerHTML = "";

            const buttonTags = document.getElementsByTagName('button');
            for (let i = 0; i < buttonTags.length; i += 1) {
                buttonTags[i].classList.remove('chosen');
            }

            for (let i = 0; i < buttonTags.length; i += 1) {
                buttonTags[i].classList.remove('chosen_fail');
            }

            // Initialize the liveHeart

            for (let i = 0; i < 5; i += 1) {
                tries[i].style.display = '';
            }

            // Add a new phrase
            let newPhraseArray = getRandomPhraseAsArray(phrases);
            addPhraseToDisplay(newPhraseArray);

        }

        // Lose condition
        else if (missNumber >= 5) {
            overlay.style.display = '';
            const h3 = document.createElement('h3');
            const div = document.getElementById('overlay');
            const tryButton = document.getElementsByClassName('btn__reset');
            div.appendChild(h3);
            div.classList.add('lose');
            h3.innerHTML = 'You Lose!';
            for (let i = 0; i < tryButton.length; i += 1) {
                tryButton[i].innerHTML = 'Try again';
            }
            // Remove the old phrase and classes
            ul.innerHTML = "";

            const buttonTags = document.getElementsByTagName('button');
            for (let i = 0; i < buttonTags.length; i += 1) {
                buttonTags[i].classList.remove('chosen');
            }

            for (let i = 0; i < buttonTags.length; i += 1) {
                buttonTags[i].classList.remove('chosen_fail');
            }

            // Initialize the liveHeart

            for (let i = 0; i < 5; i += 1) {
                tries[i].style.display = '';
            }

            // Add a new phrase
            let newPhraseArray = getRandomPhraseAsArray(phrases);
            addPhraseToDisplay(newPhraseArray);

        }
    }

});

// Get a letter from the keyboard and pass to the checkLetter function

document.addEventListener('keydown', function (event) {
    const buttonLetter = event.key;
    const buttonTags = document.getElementsByTagName('button');
    const searchLetter = buttonLetter;
    var found;

    for (let i = 0; i < buttonTags.length; i += 1) {
        if (buttonTags[i].textContent === searchLetter) {
            found = buttonTags[i];
            break;
        }
    }

    const buttonElement = found;
    const match = checkLetter(buttonLetter, buttonElement);
    const phrase = document.querySelectorAll('.letter');
    const ul = document.getElementsByTagName('ul')[0];
    const liWithClassShow = ul.getElementsByClassName('show');
    const letterLength = liWithClassShow.length;


    if (!match) {
        tries[missNumber].style.display = 'none';
        missNumber += 1;
        buttonElement.classList.add('chosen_fail');
    }

    // Win condition
    if (letterLength === phrase.length) {
        overlay.style.display = '';
        const h3 = document.createElement('h3');
        const div = document.getElementById('overlay');
        const againButton = document.getElementsByClassName('btn__reset');
        div.classList.add('win');
        div.appendChild(h3);
        h3.innerHTML = 'You Win!';
        for (let i = 0; i < againButton.length; i += 1) {
            againButton[i].innerHTML = 'Play again';
        }

        // Remove the old phrase and classes
        ul.innerHTML = "";

        const buttonTags = document.getElementsByTagName('button');
        for (let i = 0; i < buttonTags.length; i += 1) {
            buttonTags[i].classList.remove('chosen');
        }

        for (let i = 0; i < buttonTags.length; i += 1) {
            buttonTags[i].classList.remove('chosen_fail');
        }

        // Initialize the liveHeart

        for (let i = 0; i < 5; i += 1) {
            tries[i].style.display = '';
        }

        // Add a new phrase
        let newPhraseArray = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(newPhraseArray);



    }


    // Lose condition
    if (missNumber >= 5) {
        overlay.style.display = '';
        const h3 = document.createElement('h3');
        const div = document.getElementById('overlay');
        const tryButton = document.getElementsByClassName('btn__reset');
        div.appendChild(h3);
        div.classList.add('lose');
        h3.innerHTML = 'You Lose!';
        for (let i = 0; i < tryButton.length; i += 1) {
            tryButton[i].innerHTML = 'Try again';
        }

        // Remove the old phrase and classes
        ul.innerHTML = "";

        const buttonTags = document.getElementsByTagName('button');
        for (let i = 0; i < buttonTags.length; i += 1) {
            buttonTags[i].classList.remove('chosen');
        }

        for (let i = 0; i < buttonTags.length; i += 1) {
            buttonTags[i].classList.remove('chosen_fail');
        }

        // Initialize the liveHeart

        for (let i = 0; i < 5; i += 1) {
            tries[i].style.display = '';
        }

        // Add a new phrase
        let newPhraseArray = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(newPhraseArray);


    }





});


// Create a checkLetter function

function checkLetter(buttonLetter, buttonElement) {
    letterFound = false;
    const phrase = document.querySelectorAll('.letter');
    for (let i = 0; i < phrase.length; i += 1) {
        const letter = phrase[i];
        if (buttonLetter === letter.textContent.toLowerCase()) {
            letter.classList.add('show');
            buttonElement.classList.add('chosen');
            letterFound = true;
        }
    }
    return letterFound;
}