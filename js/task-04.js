const btnDecrement= document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

const add = (event)=> {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

const takeAway = (event)=> {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

btnIncrement.addEventListener('click', add);
btnDecrement.addEventListener('click', takeAway);



 



