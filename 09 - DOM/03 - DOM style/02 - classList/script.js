"use strict";

const h1 = document.querySelector("h1");
//adcionando uma uma classe a um elemento
h1.classList.add('active', 'teste1');
h1.classList.add('teste2');
h1.classList.remove('teste2');

//verifica se tem ele remove se não tiver ele adciona
h1.classList.toggle("teste3");

//verifica se exista a classe
if(h1.classList.contains('active')) {
   alert("Existe a classe active"); 
}



console.log(h1.classList.contains('active'));
console.log(h1);