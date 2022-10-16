"use strict";

//pega os proximos irmãos do elemento
const h1 = document.querySelector("h1");
const p = document.querySelector(".paragrafo");
const body = document.querySelector("body");

console.log(h1.previousSibling); //pega o texto do elemento anterios aqui retorna vazio pois não tem nada antes só espaço em branco
console.log(h1.previousElementSibling); // pega o elemento irmão anterios aqui o h1

console.log(p.previousSibling);
console.log(p.previousElementSibling); 

console.log(body.previousSibling);
console.log(body.previousElementSibling); 


