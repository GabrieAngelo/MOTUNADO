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


const ab1 = document.querySelector(".ab1");

ab1.addEventListener("mouseenter", ab1on);

function ab1on() {

    ab1.style.backgroundColor = "#f2f2f2";
}
ab1.addEventListener("mouseleave", ab1off);

function ab1off() {

    ab1.style.backgroundColor = "rgb(0, 255, 34)";

}