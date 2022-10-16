"use strict";

const btn = document.querySelector("button");
const body = document.querySelector("body");

//escuta os eventos que pode acontecer com o botão
// btn.addEventListener('click', (event) => {
//     // console.log(event);
//     // console.log(event.clientX, event.clientY);
//     console.log(1)
// });

btn.addEventListener('mouseleave', (event) => {
    body.style.background = "red";
});

btn.addEventListener('mouseover', (event) => {
    // console.log(event);
    // console.log(event.clientX, event.clientY);
    console.log("Mouse está sobre o botão");
    body.style.background = "#FFF";
});