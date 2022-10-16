"use strict";

//# Não recomendado por conta da performace
// const home = document.querySelector(".home");

// home.addEventListener("click", (event) => {
//     console.log("Home");
// });

// const sobre = document.querySelector(".sobre");

// sobre.addEventListener("click", (event) => {
//     console.log("Sobre");
// });

// const contato = document.querySelector(".contato");

// contato.addEventListener("click", (event) => {
//     console.log("Contato");
// });

//#FOrma mais perfomatica

const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
    const { target, currentTarget } = event; //target sobre o a pai
    // console.log(target.getAttribute("class")); // pega a classe via atributos
    // console.log(target.innerText); // pega o texto
    // console.log(currentTarget);
    const body = document.querySelector("body");

    switch(target.getAttribute("class")){
        case "home":
            body.style.background = "blue";
            // console.log("Você está na Home");
            break;
        case "sobre":
            body.style.background = "purple";
            // console.log("Você está na Sobre");
        break;
        case "contato":
            body.style.background = "orange";
            // console.log("Você está na Contato");
            break;
        default:
            console.log("Não encontrado!");
    }
});

// console.log(menu);