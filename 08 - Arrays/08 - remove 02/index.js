/**
 * slice = Pega os dados dentro de um range sem quebrar o Array
 * splice = remove os dados do array dentro de um range
 */

let arr = [
    {nome: "Nelcione", tel: "(99) 99999 9999" },
    {nome: "Mozão", tel: "(99) 99999 9999" },
    {nome: "Amigo 1", tel: "(99) 99999 9999" },
    {nome: "Amigo 2", tel: "(99) 99999 9999" },
    {nome: "Amigo 3", tel: "(99) 99999 9999" },
];

console.table(arr);

// const newArray = arr.slice(2, 4); // faz uma copia do array
// console.table(newArray);


arr.splice(0, 3); // remove os itens do array
console.table(arr);