let Tenis = {
    tamenho: 48,
    estoque: true,
};

let link = { link: { a: "a", b: { c: "C" } } };

let clone1 = JSON.parse(JSON.stringify(Tenis)); // converte o objeto para string

// clone1.estoque = false;
// mesclar1.link.a = "ABC";

// console.log(clone1);
// console.log(typeof clone1);

console.log(1, clone1);
console.log(2, Tenis);

let mesclar1 = Object.assign(JSON.parse(JSON.stringify(Tenis)), JSON.parse(JSON.stringify(link)));
let mesclar2 = { 
    ...JSON.parse(JSON.stringify(Tenis)), 
    ...JSON.parse(JSON.stringify(link)) };//spreadOperator

console.log(3, clone1);
console.log(4, Tenis);
console.log(5,mesclar1);
console.log(6, mesclar2);

// tecnica do clone profundo
