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



//Click outside element to close.
const closeDiv = function (element) {
    removeShowDivEl.addEventListener('click', e => {
        
        if (e.target === removeShowDivEl) {
            element.classList.remove('show');
            removeShowDivEl.classList.remove('show');
        }
    })
};

 //mobile navigation
burgerBtnEl.addEventListener('click', e => {

    if (e.target === burgerBtnEl) {
        burgerLinksWrap.classList.toggle('show');
        removeShowDivEl.classList.add('show');
        closeDiv(burgerLinksWrap);
    }
});

searchBtnEl.addEventListener('click', e => {
    removeShowDivEl.classList.add('show');

    if (e.target === searchBtnEl) {
        searchBarEl.classList.toggle('show');
        closeDiv(searchBarEl)
    }    
});

//desktop navigation
mainNavEl.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        removeShowDivEl.classList.add('show');

        if (e.target === aOneEl) {
             aOneWrapEl.classList.toggle('show');
                
        }   else {
            aOneWrapEl.classList.remove('show');
            closeDiv(aOneWrapEl);
        }
    
        if (e.target === aTwoEl) {
            aTwoWrapEl.classList.toggle('show');

        }   else {
            aTwoWrapEl.classList.remove('show');
            closeDiv(aTwoWrapEl);
        }
            
        if (e.target === aThreeEl) {
            aThreeWrapEl.classList.toggle('show');
    
        }   else {
            aThreeWrapEl.classList.remove('show');
            closeDiv(aThreeWrapEl);
        }  
    });
});   
   



