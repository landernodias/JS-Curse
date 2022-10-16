"use strict";

// append e appendChild acrescentão itens dentro do HTML
const container = document.querySelector(".container");

container.append("<h3>Olá Nelcione</h3>"); // o append não sabe o que é codigo e não sabe o que é texto 

//permite add codigo é o appendChild

const newDiv = document.createElement('div');
newDiv.innerText = "Olá Nelcione!";

container.appendChild(newDiv);
