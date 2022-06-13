console.log(":::::::::DOM - Document Object Model:::::::::");

console.log(":::::::::Window inner width:::::::::");
console.log(window.innerWidth);
console.log(":::::::::Window outer width:::::::::");
console.log(window.outerWidth);
console.log(":::::::::Window inner height:::::::::");
console.log(window.innerHeight);
console.log(":::::::::Window outer height:::::::::");
console.log(window.outerHeight);

console.log(":::::::::set item and get item:::::::::");
localStorage.setItem('key1', 1000);
console.log(localStorage.getItem('key1'));

console.log(":::::::::Window location:::::::::");
console.log(window.location);

console.log(":::::::::Location path:::::::::");
console.log(location.pathname);

console.log(document.title);

console.log(document.body.children[0].textContent);

console.log(":::::::::updating a child header:::::::::");
document.body.children[1].textContent = "I updated this text";

console.log(":::::::::accessing class names:::::::::");
console.log(document.getElementsByClassName('list-item-1'));

console.log(":::::::::accessing by id:::::::::");
console.log(document.getElementById('heading-id'));

console.log(":::::::::accessing by css selector first one.:::::::::");
console.log(document.querySelector('h1'));

console.log(":::::::::accessing by css selector all.:::::::::");
console.log(document.querySelectorAll('h1'));

console.log(":::::::::accessing by css class string.:::::::::");
console.log(document.querySelectorAll('.list-item-2'));

console.log(":::::::::accessing by css id string.:::::::::");
console.log(document.querySelectorAll('#heading-id'));

console.log(":::::::::changes style property to green:::::::::");
document.querySelector('.heading-green').style.backgroundColor = 'green';

console.log(":::::::::change first list item text to home.:::::::::");
document.querySelector('.list-item-1').textContent = "Home";

console.log(":::::::::create paragraph and add after green heading.:::::::::");
var paragraph = document.createElement('P');
var paragraphPlace = document.querySelector('.heading-green');

paragraph.textContent = 'A new paragraph!';
paragraph.style.fontSize = '17px';

paragraphPlace.appendChild(paragraph);

alert('This is an alert');
confirm('Example of a confirm popup');
prompt('Please enter your name:');