/**
 * 
 * Manipulating the DOM.
 * Build navigation,
 * Scroll to anchors from navigation,
 * and highlight section in viewport upon scrolling.
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

const pageHeader = document.querySelector('.page__header');
const navbarList = document.querySelector('#navbar__list');
// get NodeList with all sections
const sections = document.querySelectorAll('[data-nav]');

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav
const fragment = document.createDocumentFragment();

sections.forEach(function(section){
    const newLink = document.createElement('a');
    const menuItem = section.getAttribute('data-nav');
    const idItem = section.getAttribute('id');
    //set the name of menu item
    newLink.innerHTML = menuItem;
    //set the link of section for scrolling
    newLink.href = '#'.concat(idItem);
    newLink.id = 'link'.concat(idItem);
    //create new list element
    const newElement = document.createElement('li');
    addItemClickListener(newLink);  
    newElement.appendChild(newLink);
    fragment.appendChild(newElement);
})
navbarList.appendChild(fragment);

//change page header style
pageHeader.style.opacity = '.7';

// Add class 'active' to section when near top of viewport
function setActiveSection(){ 
    // get vertical scroll position
    let y = window.pageYOffset;

    // Identify active section 
    sections.forEach(function(section){
        const sectionTop = section.offsetTop-100;
        const sectionHeight = section.offsetHeight;
        let menuItem = document.querySelector('#link'.concat(section.getAttribute('id')));
            
        // Add/remove class 'active'
        if (sectionTop <= y && y < (sectionTop + sectionHeight)){
            section.classList.add('active');
            menuItem.classList.add('active_item');
        } else {
            section.classList.remove('active');
            menuItem.classList.remove('active_item');
        }
    })
    
}

// mapping navigation menu
let t;
function mapMenu(){
    // clear previous time out if it exist
    if (t) {
            clearTimeout(t);
    }
    // return menu when start to scrolling
    showHiddenMenu('visible');
    // don't hide menu if it's the head of page
    if (window.pageYOffset !== 0){
        t = setTimeout(() => {
            showHiddenMenu('hidden');   
        }, 2000);
    }        
}

function showHiddenMenu(hidden){
    pageHeader.style.visibility = hidden;
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Set sections as active
window.addEventListener('scroll', setActiveSection);

// mapping navigation menu
window.addEventListener('scroll', mapMenu);
window.addEventListener('pointermove', mapMenu);

// scrolling to section from navigation menu
function addItemClickListener(item){
    item.addEventListener('click', function(event){
        event.preventDefault();
        sectionID = item.getAttribute('href');
        document.querySelector(sectionID).scrollIntoView({behavior: 'smooth'});
    });
}