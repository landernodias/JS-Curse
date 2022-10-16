"use strict";

/**
 * textContent => retorna o text COM formatação, mas sem os elementos
 * innertext => Retorna somente o texto, sem formatação
 */

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

p.textContent = "Nelcione Dias"; // vem formatado 
p.innerText = "<strong>Nelcione Dias</strong>"; // vem sem formatação