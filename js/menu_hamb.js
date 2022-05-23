const menu_hamb = document.querySelector("[data-hamb]");
var imgHamb = document.querySelector("[data-close]")
const menu1 = document.querySelector("[data-menu]");
menu_hamb.addEventListener('click', randonclick);
function randonclick(){
    menu_hamb.classList.toggle("active");
    menu1.classList.toggle("active");
    if(menu_hamb.classList.contains('active')){
        imgHamb.src = 'img/icons/close.svg' ;
    }
    else{
        imgHamb.src = 'img/icons/menu.svg';
    }
}//menu hamburguer
