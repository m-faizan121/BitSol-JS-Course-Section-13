'use strict';

// To select whole html
console.log(document.documentElement);

// To create new element using DOM
const div = document.createElement('div');

// Add class to element
div.classList.add('blue-back');

// Add inner html to element
div.innerHTML = "<p> This is Java Script course</p>";

let body = document.getElementsByTagName('body')[0]; // get body element

body.prepend(div); // To add at begining of tag
body.append(div.cloneNode(true)); // To add at end of tag
// div.cloneNode(true) use to duplicate element because elements are unique

// Delete element
const button = document.querySelector("#btn");
button.addEventListener('click', function(){
    console.log(div.parentElement);
    div.parentElement.removeChild(div);
});

// Bubbling & Capturing
// When we add event handle to any element, it will propogate to its parent element 

/////////////////////////////////////////// DOM Traversing

// Going Downwards: Childs
const h1 = document.querySelector('h1'); // To select h1 eleemnt
console.log(h1.querySelectorAll('.highlights')); // All elements within h1 with classname (highlights)
console.log(h1.childNodes); // All childs includes (text, comment, text, span.highlights, text, span.highlights, text)
console.log(h1.children); // Direct childs (span.highlights, span.highlights)
// To set properties
h1.firstElementChild.style.color = 'blue'; // Change the first element color to blue

// Going Upwards: Parents
console.log(h1.closest('body')); // To get closest parent
console.log(h1.parentElement); // Parent of node

// Tabbed component
const tabsContainer = document.querySelector(".tabs-container");
tabsContainer.addEventListener('click', function(e){
    const target = e.target;
    if(target.closest('.tab-btn')){
        const data = document.querySelector('.data');
        const content = document.querySelector('.content');
       
        data.style.display = 'block';
        const name = target.textContent;
        if(name === 'Tab 1')
        {
            content.innerHTML = 'I am Tab 1';
        }
        else if(name === 'Tab 2')
        {
            content.innerHTML = 'I am Tab 2';
        }
        else
        {
            content.innerHTML = 'I am Tab 3';
        }
    }
});

//
