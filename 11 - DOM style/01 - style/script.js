"use strict";

const h1 = document.querySelector("h1");

//font-famile: 'arial';
h1.style.fontFamily = "Arial";
h1.style.color = "red";

const p = document.querySelectorAll("p");

p.forEach((element) => {
    element.style.fontFamily = "Arial";
    element.style.fontSize = "12px";
});