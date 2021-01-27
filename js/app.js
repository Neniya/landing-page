/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navbarList = document.querySelector('#navbar__list');
// const navMenu = ['Home',
//     'Section1',
//     'Section2',
//     'Section3'];
const navMenu = [];
sectionList = document.querySelectorAll('[data-nav]');
// sectionList.forEach(function(section){

// })


const fragment = document.createDocumentFragment();

sectionList.forEach(function(section){
    const newLink = document.createElement('a');
    const menuItem = section.getAttribute('data-nav');
    const idItem = section.getAttribute('id');
    newLink.innerHTML = menuItem;
    newLink.href = '#'.concat(idItem);
    const newElement = document.createElement('li');
    newElement.appendChild(newLink);
    fragment.appendChild(newElement);
})
navbarList.appendChild(fragment);
const pageHeader = document.querySelector('.page__header');
pageHeader.style.opacity = '.5';


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


