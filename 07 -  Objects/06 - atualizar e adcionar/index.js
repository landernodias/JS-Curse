let Tenis = {
    tamanho: 45,
    estoque: true,

};

Tenis.tamanho = 41;
Tenis.estoque = false;
// Tenis.preco = "R$ 119.99";
Tenis['preco'] = "R$ 49,99";

console.log(Tenis);
console.log(Tenis['preco']);