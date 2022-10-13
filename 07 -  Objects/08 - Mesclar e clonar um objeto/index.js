let Tenis = {
    tamenho: 48,
    estoque: true,
};

let link = { link: { a: "a", b: { c: "C" } } };

let clone1 = Tenis;
let mesclar1 = Object.assign(Tenis, link);
let mesclar2 = { ...Tenis, ...link };//spreadOperator

console.log(1, clone1);
console.log(2, Tenis);

clone1.estoque = false;
mesclar1.link.a = "ABC";

console.log(3, clone1);
console.log(4, Tenis);
console.log(5,mesclar1);
console.log(6, mesclar2);
// console.log(Tenis);

