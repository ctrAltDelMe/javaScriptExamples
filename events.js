window.onload = function(){
    console.log('Window Loaded!')
}

var btnClickMe = document.querySelector('.btn-click-me');
var btnClickMe2 = document.querySelector('.btn-click-me-2');


btnClickMe.addEventListener('click', listerner1);
btnClickMe2.addEventListener('click', listerner2);

function listerner1(){
    console.log('Listerner1');
}

function listerner2(){
    console.log('Listerner2');
}

var inner = document.querySelector('#inner');
var outer = document.querySelector('#outer');
inner.addEventListener('click', innerListener);
outer.addEventListener('click', outerListener);

function innerListener(event){
    console.log(event.target);
    console.log(event.bubbles);
    event.target.style.backgroundColor = 'red';
    event.stopPropagation();
    console.log('CLicked yellow box!')
}
function outerListener(event){
    console.log('CLicked green box!')
}


/*btnClickMe.onclick = function(){
    console.log('Button Clicked');
}*/