const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControl.value = 0;


fontSizeControl.addEventListener('input' ,addStars);

function addStars () {
       text.style.fontSize = `${fontSizeControl.value}px`;
    
}