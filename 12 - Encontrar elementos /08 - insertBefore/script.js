"use strict";

//encontrar elemento e inserir antes do elemento
const container = document.querySelector(".container");
const paragrafo = document.querySelector(".paragrafo");//seleciona o item dentro do containne
const h1 = document.querySelector("h1");//seleciona o item dentro do containne

const newH2 = document.createElement('h2');
newH2.innerText = "Novo elemento criado Nelcione.";

// container.insertBefore(newH2, paragrafo);// insertBefore(itemQueQueroAdd, localAntesDeOndeQueroAdd);
container.insertBefore(newH2, h1);// insertBefore(itemQueQueroAdd, localAntesDeOndeQueroAdd);
