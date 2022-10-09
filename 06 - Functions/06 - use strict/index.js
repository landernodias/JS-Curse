/*
    O strict mode elimina alguns erros silenciosos
    que passariam batido do Javascript e os faz emitit erros

    Além disso, essa forma corrige alguns erros que tornam o Javacript
    dificil de ser otimizado, então algumas vezes os códigos no modo estrito
    rodam mais otimizados e valozes do que os códigos no 'modo normal'

    link https://www.geeksforgeeks.org/scrit-mode-javascript/
 */
// var teste;
"use strict";

// var arguments; gera erros

(() => {
    teste = "teste";
})();

console.log(teste);