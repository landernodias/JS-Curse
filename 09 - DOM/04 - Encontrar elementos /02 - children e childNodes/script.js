"use strict";
const container = document.querySelector(".container");

//não interado
console.log(container.children); // HTMLCollection

//interado
console.log(container.childNodes); // NodeList

// ES6 Funcionalidade - interando o container.childrein
const children = Array.from(container.children); //convertaendo em um array

// console.log(children);

children.forEach((element) => {
    console.log(element);
});
