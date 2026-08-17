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



const ab = document.querySelector(".ab");
ab.addEventListener("mouseenter", bordaon);
ab.addEventListener("mouseleave", abordff);

function bordaon() {
    ab.forEach(function(ab) {
        const ab = document.querySelector(".ab");
        ab.classList.add("borda1");
    });



}