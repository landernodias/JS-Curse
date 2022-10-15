"use strict";

const p = document.getElementsByClassName("paragrafo");

console.log(p);

// HTMLColection não funciona com foreach
for(let item of p){
    console.log(item);
}