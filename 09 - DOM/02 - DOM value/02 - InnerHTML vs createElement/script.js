"use strict";

/**
 * innerHTML => retorna o texto, com formatação e com elementos html
 * createElement => Cria um elemento HTML
 */

const div = document.querySelector("div");
// console.log(1, div);

// div.innerHTML = 
// ` ${div.innerHTML}
//     <br />
//     <strong>Esse é meu texto alterado!</strong>
// `;
// console.log(2, div);

const elementUl = document.createElement("ul"); //cria ua UL
console.log(elementUl);

[1,2,3].forEach((element) =>{
    const elementLi = document.createElement("li");
    // console.log(elementLi);
    elementLi.innerText = element;
    elementUl.appendChild(elementLi);
});

div.appendChild(elementUl);//adciona a UL em uma div




