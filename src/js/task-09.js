const widget = document.querySelector('.widget');
const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

changeColor.addEventListener('click', () => {
  color.textContent = getRandomHexColor();
  widget.style.backgroundColor = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
