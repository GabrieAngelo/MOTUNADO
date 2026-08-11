function abrirmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.toggle("open");
}

function fecharmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.remove("open");

}

const modelo = document.querySelector("#modelo")
modelo.addEventListener("click", abrirmenu);


const abord = document.querySelector(".abord");
abord.addEventListener("mouseenter", abordon);
abord.addEventListener("mouseleave", abordff);

function abordon() {

    
    const abord = document.querySelector(".abord");
    abord.style.border = "2px solid rgb(255, 0, 0)";
}
function abordff() {

   
    const abord = document.querySelector(".abord");
    abord.style.border = "2px solid rgb(47, 0, 255)";

}