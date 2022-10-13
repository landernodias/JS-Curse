const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 123456,
    n: 5,
    link: { a: "a = é a", b: { c: "C" } },
};


//hasOwnProperty | propertyName in Tenis
if (Tenis.hasOwnProperty("tamanho")){
    console.log(`Existe Ténis do tamanho: ${Tenis.tamanho} no Estoque!`);
} else {
    console.log(`Não existe do tamanho`);
}

//tamanho existe dentro de tenis?
console.log("tamanho" in Tenis);