# Projects related to DOM

## project link 
[Click here](https://stackblitz.com/edit/stackblitz-starters-cbqln3?file=index.html)

# Solution code 

## Project 1 

```JavaScript
console.log("arabi44-cyber")

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