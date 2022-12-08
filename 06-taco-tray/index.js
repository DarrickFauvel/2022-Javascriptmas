// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos!

const generateRandomNumber = (maxNumber) =>
  Math.floor(Math.random() * maxNumber + 1);

function getRandomNumberOfTacos() {
  /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */

  const maxNumberOfTacos = 10;
  const tacoEmoji = '🌮';

  return new Array(generateRandomNumber(maxNumberOfTacos)).fill(tacoEmoji);
}

function putTacosOnTray() {
  return getRandomNumberOfTacos()
    .map(function (taco) {
      return `<div class="taco">${taco}</div>`;
    })
    .join('');
}

document.getElementById('tray').innerHTML = putTacosOnTray();
