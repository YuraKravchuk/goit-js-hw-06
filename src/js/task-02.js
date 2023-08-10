const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');

const title = document.createElement('h2');
title.textContent = 'ingredients';
title.classList.add('item');

const potatoes = document.createElement('li');
potatoes.textContent = 'Potatoes';

const mushrooms = document.createElement('li');
mushrooms.textContent = 'Mushrooms';

const garlic = document.createElement('li');
garlic.textContent = 'Garlic';

const tomatos = document.createElement('li');
tomatos.textContent = 'Tomatos';

const herbs = document.createElement('li');
herbs.textContent = 'Herbs';

const condiments = document.createElement('li');
condiments.textContent = 'Condiments';

ingredientsEl.append(title,potatoes,mushrooms,garlic,tomatos,herbs,condiments)