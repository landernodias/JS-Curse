"use strict";

const container = document.querySelector(".container");

// container.after("<p>Olá, Nelcione</p>");// não adciona elementos assim

const newP = document.createElement("p");
newP.textContent = "Olá, Nelcione";

// container.after(newP);
container.before(newP);