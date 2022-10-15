'use strict';

const h1 = document.querySelector("h1"); // TAG HTML5
const classP = document.querySelector(".paragrafo"); // class
// const classPStrong = document.querySelector(".paragrafo strong"); // class usando last
const idP = document.querySelector("#paragrafo"); // id

console.log(h1);
console.log(classP.querySelector("strong")); // outra opção para pegar tags interna 
// console.log(classPStrong);
console.log(idP);

let timer = 0;
const title = document.querySelector("title");

// setInterval(() => {
//     title.innerText = timer;
//     timer++;
// }, 5000);