"use strict";

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
    event.preventDefault(); // muito usando em formulario quando quer que a pagina não recarrege
    console.log("Evento prevenido!");
});