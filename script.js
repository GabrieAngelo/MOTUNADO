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


    const textbox = document.querySelectorAll(".textbox");
    textbox.forEach(function(textbox) {
        textbox.addEventListener("mouseenter", function() {
            textbox.classList.add("white");
        });
    });

    const des = document.querySelectorAll(".des");
    des.forEach(function(des) {
        textbox.addEventListener("mouseenter", function() {
            des.classList.add("red");
        });
    });

}

function abordff() {


    const textbox = document.querySelectorAll(".textbox");
    const des = document.querySelectorAll(".des");
    des.forEach(function(des) {
        des.addEventListener("mouseleave", function() {
            des.classList.remove("red");
        });

    });
    textbox.forEach(function(textbox) {
        textbox.addEventListener("mouseleave", function() {
            textbox.classList.remove("white");
        });
    });

}