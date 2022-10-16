"use strict";

const input = document.querySelector("#name");

console.log(input.value);

//ele executa e para
setTimeout( () => {
    input.value = "Anna Claudia";
    console.log(input.value);
}, 1000);