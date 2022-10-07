/**
 * Pricisamos mostrar quantas letras repetidas aparecem em uma palavra
 * exp.: Abacate = { a: 3, b: 1, c: 1, t: 1, e; 1 }
 */

const nome = "Nelcione Valerio Dias".toLowerCase().replaceAll(" ", "");
let letras= {}; //armazena todas as letras da palavra

for(let i = 0; i < nome.length; i++){
    if(letras[nome[i]]){ // se nossa letra possui a primeira letra da string se sim incrementa 
        letras[nome[i]]++; // se encontrar encremente ele mesmo mais 1
    } else { //não encontrou nada
        letras[nome[i]] = 1; //se não encontrar cria ela e adciona o valor 1
    }
}
console.log(letras);