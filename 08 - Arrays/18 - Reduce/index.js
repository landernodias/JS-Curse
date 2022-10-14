const pedidos = [
    {
        id: 420,
        nome: "Nelcione",
        alimento: "Sandubão de Bacon",
        bebida: "Suco de Limão",
        preco: 22.30,
    },
    {
        id: 152,
        nome: "Anna Claudia",
        alimento: "X-Salada",
        bebida: "Suco de Laranja",
        preco: 19.90,
    },
    {
        id: 33,
        nome: "Luiz",
        alimento: "Sanduiche de Queijo",
        bebida: "Refrigerante",
        preco: 21.65,
    },
    {
        id: 55,
        nome: "Iago",
        alimento: "Pizza",
        bebida: "Refrigerante",
        preco: 18.32
    },
];

/**
 * A ideia é pegar todos os valores de um array e condensálos em um só
 */


const balanco = pedidos.reduce((total, element) => {
    return total + element.preco;
}, 0);

console.log(balanco);