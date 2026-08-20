function abrirmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.toggle("open");
    document.body.style.overflow = 'hidden';
}

function fecharmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.remove("open");
    document.body.style.overflow = '';

}
const modelo = document.querySelector("#modelo")
modelo.addEventListener("click", abrirmenu);








const ab = document.querySelectorAll(".ab");
ab.forEach(function(ab) {

    const ab1foto = ab.querySelector(".ab1foto");
    const textbox = ab.querySelector(".textbox");
    const des = ab.querySelector(".des");
    const valor = ab.querySelector(".valor");

    ab.addEventListener("mouseenter", function() {
        ab.classList.add("borda1");
        ab1foto.classList.add("ab1on");
        textbox.classList.add("vermelho");

        valor.classList.add("textobranco");
        des.classList.add("textobranco");


    });

    ab.addEventListener("mouseleave", function() {
        ab.classList.remove("borda1");
        ab1foto.classList.remove("ab1on");
        textbox.classList.remove("vermelho");

        valor.classList.remove("textobranco");
        des.classList.remove("textobranco");


    });
});