const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const phrases = ['Tell me your secret',
    'I am Naoto',
    'I love Harry Potter',
    'What is your name',
    'Where are you from'
]
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


// function checkLetter
const lengthOfPhrase = phraseArray.length;

function checkLetter(button) {
    
    //Get a button letter
    for (let i = 0; i < button.length; i += 1) {
        document.querySelectorAll("button")[i].addEventListener('click', function () {
            var buttonLetter = this.innerHTML;
            
            // get a phraseArrayLetter
            for (let i = 0; i < lengthOfPhrase; i += 1) {
                var phraseArrayLetter = phraseArray[i].toLowerCase();
                let li = document.getElementsByClassName('letter')[i];

                //Condition
                if (buttonLetter === phraseArrayLetter) {
                    li.classList.add('show');
                    var correctLetter = phraseArrayLetter;
                    return correctLetter;
                } else {
                    return null;

                }
            }
        });

    }
}

const numberOfButtons = document.querySelectorAll("button");
checkLetter(numberOfButtons);
