const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const input= document.querySelector('[type="number"]');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');





buttonCreate.addEventListener('click', () => { createBoxes(Number(input.value)) });
buttonDestroy.addEventListener('click', destroyBoxes);



function createBoxes(amount) {
  
  let size = 30;
  let arr = [];

  for (let i = 0; i < amount; i += 1){
    size += 10;

    const boxesEl = document.createElement('div');
    boxesEl.style.backgroundColor = getRandomHexColor();
    boxesEl.style.width = `${size}px`;
    boxesEl.style.height = `${size}px`;
    boxesEl.style.marginTop = '5px';
    arr.push(boxesEl);
  
    
  } 

  return boxes.append(...arr);


}




function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



