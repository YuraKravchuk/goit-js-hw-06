const element = document.querySelector('#categories');
console.log(`Number of categories:${element.children.length}`);

const ulEl = document.querySelectorAll('.item');
ulEl.forEach((item) => {
    console.log('Category:' + item.firstElementChild.textContent);
    console.log('Elements:' + item.lastElementChild.children.length);
});
