# Projects related to DOM

## project link 
[Click here](https://stackblitz.com/edit/stackblitz-starters-cbqln3?file=index.html)

# Solution code 

## Project 1 

```JavaScript
console.log("arabi44-cyber");

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.background = e.target.id;
        break;
      case 'green':
        body.style.background = 'green';
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.background = 'yellow';
        break;
      case 'red':
        body.style.background = e.target.id;
        break;
    }
    // if (e.target.id === 'grey') {
    //   body.style.background = e.target.id;
    // }
    // if (e.target.id === 'green') {
    //   body.style.background = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.background = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.background = e.target.id;
    // }
  });
});

```
## Project 2 

```Javascript
consloe.log("arabi44-cyber");
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  const weight_guide = document.querySelector('#weight-guide');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give the valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give the valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      weight_guide.textContent = `${bmi} : Under weight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      weight_guide.textContent = `${bmi} : Normal weight`;
    } else {
      weight_guide.innerHTML = `${bmi} : OverWeight`;
    }
  }
});
```

##project 3 
```javascript
consloe.log("arabi44-cyber");
const clock = document.getElementById('clock');

// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4
```javascript
console.log("arabi44-cyber")
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enetr a valid number');
  } else if (guess < 1) {
    alert('Please enetr a valid number');
  } else if (guess > 100) {
    alert('Please enetr a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      dispalyGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      dispalyGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO High`);
  }
}

function dispalyGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${12 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2> ${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  console.log(p);
  const button = document.querySelector('#newGame');

  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  // newGameButton.style.background = 'red';
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${12 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```