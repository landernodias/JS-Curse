let Tenis = {
    cardaco: "G",
    type: "Tenis de Corrida",
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            largura: 35,
            altura: 40,
            profundidade: 10,
        },
    },
    marcaArrayValores: ["Nike", "Adidas", "etc"],
    marcaArrayObj: [
        {
            name: "Nike"
        }, 
        {
            name: "Adidas"
        },
        {
            name:"etc"
        }
    ],
    getMarcaArrayObj: function(param) {
        this.marcaArrayObj[param].name;
    },
    getMarcaArrayValor: function (param) {
        this.getMarcaArrayValor[param];
    },
}

console.log(Tenis);
console.log(Tenis.tamanho);
console.log(Tenis.type);