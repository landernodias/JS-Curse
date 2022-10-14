const myArray = [ 1, 2, 3, 4, 5,6];
const myArrayOBJ = [
    {
        nome: "Nelcione",
        sobrenome: "Dias",
    },
    {
        nome: "Anna Claudia",
        sobrenome: "Dias",
    },
    {
        nome: "Luzia",
        sobrenome: "Castro",
    },
];

//for ([inicialização]; [condição]; [expressão final])
// for(let i = 0; i < myArrayOBJ.length; i++) {
//     console.log(myArrayOBJ[i].nome, myArrayOBJ[i].sobrenome);
// }

//**************************************************************************************************** */
// for Of

// for(let item of myArray){
//     console.log(item);
// }

// for(let item of myArrayOBJ){
//     console.log(item.nome, item.sobrenome);
// }

/******************************************************************************************************** */

//for in: casos bem expecificos
const obj = { nome: "Nelcione", sobrenome: "Dias" };

for(let item in obj){ // mostra os atributos 
    // console.log(item);
    console.log(obj[item]); // acessa os valores
}
