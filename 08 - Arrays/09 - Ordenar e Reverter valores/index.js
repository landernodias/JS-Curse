// const stringArray = ["A","C","D","W", "L", "B"];

// console.log("Sort:", stringArray.sort()); //sort é feito para string mais usando o callback function pode ser modificado
// console.log("Reverse", stringArray.reverse()); //ordena de traz para frente

//numeros

// const numerosArray = [10, 20, 30, 40, 50, 1000, 1, 55, 15];

// console.log("Ordenar number: ", numerosArray.sort((a, b) => a - b )); // ordena usando callback
// console.log("Ordenar number decrecente: ", numerosArray.sort((a, b) => b - a )); // ordena usando callback
// console.log("Ordenar number decrescente reverse(): ", numerosArray.sort((a, b) => a - b ).reverse()); // ordena usando callback


//objetos

const objArray = [
    { 
        nome: "Nelcione Dias",
    },
    { 
        nome: "Anna Claudia",
    },
    { 
        nome: "Luzia Barbosa" ,
    },
    { 
        nome: "Vitória Josefa",
    },
    { 
        nome: "Nelson Fernandes",
    },
    { 
        nome: "João Pereira", 
    },
];

console.log("Ordenar Obj: ",objArray.sort((a,b) => a.nome.localeCompare(b.nome))); // ordena os objetos por um atributo
console.log("Ordenar Obj invertendo variaveis: ",objArray.sort((a,b) => b.nome.localeCompare(a.nome))); // ordena os objetos por um atributo
console.log("Ordena Obj reserse(): ",objArray.sort((a,b) => a.nome.localeCompare(b.nome)).reverse()); // ordena os objetos por um atributo

/**
 * sort((a, b) => a - b )
 * Se retornar um valor negativo o valor de "a" sera ordenado antes de "b".
 * se retornar 0, a ordenação de "a" e "b" não mudará.
 * se retornar um valor positivo, o valor de "b" será ordenado antes de "a"
 */
