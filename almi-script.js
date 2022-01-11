const mainNavEl = document.querySelectorAll('.mainNav');

const mainNavDropEl = document.querySelector('.mainNavDrop');
const aOneEl= document.querySelector('.aOne');
const aOneWrapEl = document.querySelector('.aOneWrap');

const aTwoEl = document.querySelector('.aTwo');
const aTwoWrapEl = document.querySelector('.aTwoWrap');

const aThreeEl = document.querySelector('.aThree');
const aThreeWrapEl = document.querySelector('.aThreeWrap');

const searchBtnEl = document.querySelector('.searchBtn')
const searchBarEl = document.querySelector('.searchBar')

const burgerBtnEl = document.querySelector('.burgerIcon');
const burgerLinksWrap = document.querySelector('.burgerLinksWrap');

const removeShowDivEl = document.querySelector('.removeShowDiv');



 //mobile navigation
burgerBtnEl.addEventListener('click', e => {
    console.log(e.target)
    if (e.target === burgerBtnEl) {
        burgerLinksWrap.classList.add('showLinks');
        removeShowDivEl.classList.add('show');
    }
});

//make it possible to click outside thex element to close it.
removeShowDivEl.addEventListener('click', e => {
    e.preventDefault();

    if (e.target === removeShowDivEl || e.target === burgerBtnEl) {
        burgerLinksWrap.classList.remove('showLinks');
        removeShowDivEl.classList.remove('show');
    }
});

//search bar
searchBtnEl.addEventListener('click', () => {
    searchBarEl.classList.toggle('showSearchBar')
})

//desktop navigation
mainNavEl.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        if (e.target === aOneEl) {
            aOneWrapEl.classList.toggle('show'); 

        }   else {//prevents you from seeing all dropNavs at the same time if you toggles between the links
            aOneWrapEl.classList.remove('show'); 
        }

        if (e.target === aTwoEl) {
            aTwoWrapEl.classList.toggle('show');

        }   else {
            aTwoWrapEl.classList.remove('show');
        }
        
        if (e.target === aThreeEl) {
            aThreeWrapEl.classList.toggle('show');

        }   else {
            aThreeWrapEl.classList.remove('show');
        }  
    });
});   
   



