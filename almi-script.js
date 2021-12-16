

const mainNavEl = document.querySelectorAll('.mainNav');

const mainNavDropEl = document.querySelector('.mainNavDrop');
const aOneEl= document.querySelector('.aOne');
const aOneWrapEl = document.querySelector('.aOneWrap');

const aTwoEl = document.querySelector('.aTwo');
const aTwoWrapEl = document.querySelector('.aTwoWrap');

const aThreeEl = document.querySelector('.aThree');
const aThreeWrapEl = document.querySelector('.aThreeWrap');

const body = document.querySelector('BODY');


function burgerFunction() {
    const burgerLinksWrap = document.querySelector(".burgerLinksWrap");
    
    if (burgerLinksWrap.style.display === "flex") {
        burgerLinksWrap.style.display = "none";
    } else {
        burgerLinksWrap.style.display = "flex";
    }
}

mainNavEl.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        if (e.target === aOneEl) {
            aOneWrapEl.classList.add('show');  
            
        }   else if (e.target !== aOneEl) {
             aOneWrapEl.classList.remove('show');  
        }    
        
        if (e.target === aTwoEl) {
            aTwoWrapEl.classList.add('show');

        }   else if (e.target !== aTwoEl) {
            aTwoWrapEl.classList.remove('show');
        }   
        
        if (e.target === aThreeEl) {
            aThreeWrapEl.classList.add('show');

        }   else if (e.target !== aThreeEl) {
            aThreeWrapEl.classList.remove('show');

        } 
    })
});