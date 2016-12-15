function sayLike() {
        let textBox = 'Like';
        console.log('user is en fuego');
    }

function sayNope() {
        let textBox = 'Nope';
        console.log('user has been noped!');
    }

function init () {
    let button = document.querySelector('#add');
    button.addEventListener('click', getProfile);
}
//console.log('yippee')

function getProfile() {
let body = document.querySelector('body');

let list = document.createElement('ul');

//add my image
let img = new Image();
let photo = document.createElement('img');

img.onload = function() {
  list.appendChild(img);
};
img.src = 'https://randomuser.me/api/portraits/men/26.jpg';

//Add my <h1>
    let header = document.createElement('h1');
    header.textContent = 'BoBo Brown';
    list.appendChild(header);

//add my like button

    let buttonL = document.createElement('button');
    buttonL.textContent = 'Like';
    buttonL.addEventListener('click', sayLike);
    list.appendChild(buttonL);
    

//add my nope button

    let buttonN = document.createElement('button');
    buttonN.textContent = 'Nope';
    buttonL.addEventListener('click', sayNope);
    list.appendChild(buttonN);
        
 
 body.appendChild(list);

 window.addEventListener('load', init);
}