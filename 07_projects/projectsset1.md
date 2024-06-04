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