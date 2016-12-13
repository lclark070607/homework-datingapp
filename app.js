//window.onload = function() {} 

function init() {

    function sayLike() {
        let textBox = 'Like';
        console.log('user is en fuego');
    }

    function sayNope() {
        let textBox = 'Nope';
        console.log('user has been noped!')
    }

    function createProfile() {
        console.log('click');
    }

    let buttonHeader = document.querySelector('#add');
    buttonHeader.addEventListener('click', createProfile);
        

    // document.body.onload = addElement;

    //found this strategy here: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    // function addElement () {
    //     let newLi = document.createElement('li');
    //     let newProfile = document.create
    //     newLi.appendChild(newProfile);
    //     let currentDiv = document.getElementById('li1');
    //     document.body.insertBefore(newLi, newProfile);
    // }

    //Create a new li



    let child = document.createElement('li');
    let parent = document.querySelector('#list');
    parent.appendChild(child);


    // let header = document.createElement('h2'); 
    // header.textContent = 'BoBo Bear';
    // child.appendChild(header);
    // header.addEventListener('click', function () {
    // console.log('Do you fold laundry?')
    // });

    // let buttonLike = document.createElement('button');
    // buttonLike.addEventListener('click', sayLike);

    // let buttonNope = document.createElement('button');
    // buttonNope.addEventListener('click', sayNope);

};


window.addEventListener('load', init);

//make class faded, add class faded to it in javascript
//class=faded
//on click print this, and add class faded to the li parent.classlist.add.faded