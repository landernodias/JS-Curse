"use strict";

const menu = document.querySelector("#menu");

menu?.addEventListener("click", (event) => { //? validação 
    const { target, currentTarget } = event; 
    const body = document.querySelector("body");

    switch(target.getAttribute("class")){
        case "home":
            body.style.background = "blue";
            break;
        case "sobre":
            body.style.background = "purple";
        break;
        case "contato":
            body.style.background = "orange";
            break;
        default:
            console.log("Não encontrado!");
    }
});