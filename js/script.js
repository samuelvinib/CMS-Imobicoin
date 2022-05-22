const menu_hamb = document.querySelector("[data-hamb]");
const menu1 = document.querySelector("[data-menu]");
menu_hamb.addEventListener('click', randonclick);
function randonclick(){
    menu_hamb.classList.toggle("active");
    menu1.classList.toggle("active");
    if(menu_hamb.classList.contains('active')){
        menu_hamb.innerHTML =  '<span class="head__hamb" data-hamb=""><img data-close="" src="img//icons/close.svg" alt="menu hamburguer" title="menu"></span>';
    }
    else{
        menu_hamb.innerHTML = '<span class="head__hamb" data-hamb=""><img data-close="" src="img/icons/menu.svg" alt="menu hamburguer" title="menu"></span>';
    }
}//menu hamburguer