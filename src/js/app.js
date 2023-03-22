//Поддержка Webp
import * as flsFunction from "./modules/functions.js";

flsFunction.isWebp();

// Превращает картинку img в background-image
function ibg(){ 
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
ibg();

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let button = document.querySelector('.scroll');
let content = document.querySelector('#content');

button.addEventListener('click', () => {
    scrollTo(content);
})

//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active')
    });
}