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

const toggleButton = document.querySelector('.toggleButton');
const burgerLinksWrap = document.querySelector('.burgerLinksWrap');


//mobile navigation
toggleButton.addEventListener('click', () => {
    //console.log(burgerLinksWrap.classList)
    burgerLinksWrap.classList.toggle('showLinks')
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
   



