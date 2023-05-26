const bodyElement = document.body;
const buttonElement = document.getElementById("theme-button")
const iconElement = document.querySelector(".container__footer__theme__button");
const icono = document.querySelector(".icono");

//EVENT LISTENERS
buttonElement.addEventListener("click", function(){
    bodyElement.classList.toggle("light-mode")
    iconElement.classList.toggle("theme--button--pressed");

    if(!icono.classList.contains("light--theme")){
        icono.classList.add("light--theme")
    }
    
    // CAMBIA LA IMAGEN DEL ICONO
    if(icono.classList.contains("fa-moon")){
        icono.classList.remove("fa-moon");
        icono.classList.add("fa-sun");
    }else if(icono.classList.contains("fa-sun")){
        icono.classList.remove("fa-sun");
        icono.classList.add("fa-moon");
    }
})