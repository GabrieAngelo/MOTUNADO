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






const ab = document.querySelectorAll(".ab");

ab.forEach(function(ab) {
    ab.addEventListener("mouseenter", function() {
        ab.classList.add("borda1");
    });
});

ab.forEach(function(ab) {
    ab.addEventListener("mouseleave", function() {
        ab.classList.remove("borda1");
    });
});