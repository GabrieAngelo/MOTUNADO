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