//window.onload = function() {} 

function init() {

    function sayLike() {
        let textBox = 'Like';
        console.log('user is en fuego');
    }

    function sayNope() {
        let textBox = 'Nope';
        console.log('user has been noped!');
    }

    function addAnother()  {
        let ul = document.getElementById('list');
        let li = document.createElement('li');
        // let children = ul.children + 1;
        // li.setAttribute("id", "element" + children)
        li.appendChild(document.createTextNode('Profile Name'));
        ul.appendChild(li)
        console.log(ul.children + 1);
}

    
    // function addProfile() {
    //     let newProfile = document.createElement('li');
    //     console.log(newProfile);
    // }
    
    // let buttonHeader = document.querySelector('#add');
    // buttonHeader.addEventListener('click', createProfile);


    //2. Create a new <li>
    let child = document.createElement('li'); 

    let header = document.createElement('h2'); 
     header.textContent = 'BoBo Bear';
     child.appendChild(header);
     header.addEventListener('click', function () {
     console.log('Do you fold laundry?')
    });
    
    let buttonLike = document.createElement('button');
    buttonLike.addEventListener('click', sayLike);
    
    let parent = document.querySelector('#list'); //<the ul>
    parent.appendChild(child); //add the child element to the parent

    window.addEventListener('load', init);
}

    // let buttonNope = document.createElement('button');
    // buttonNope.addEventListener('click', sayNope);

// let button = document.querySelector('#Like');
    // button.textContent = 'Like';
    // child.appendChild(button);
    // button.addEventListener('click', sayNope);
    // }

//make class faded, add class faded to it in javascript
//class=faded
//on click print this, and add class faded to the li parent.classlist.add.faded