const widget = document.querySelector('.widget');
const body = document.querySelector('body');

const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

changeColor.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor = getRandomHexColor();

});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
