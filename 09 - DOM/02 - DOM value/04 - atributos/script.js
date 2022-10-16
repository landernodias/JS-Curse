"use strict";

const div = document.querySelector("div");

// adcionar valores
div.setAttribute("id", "teste");

//adciona classes a um elemento html
div.setAttribute("class", `${div.getAttribute("class")} active`);
div.setAttribute("class", `${div.getAttribute("class")} backgroud-red`); // pega os atributos existente e adciona mais um

// pega um atributo ID do elemento 
// console.log(div.getAttribute("id"));

div.removeAttribute("class");
console.log(div);