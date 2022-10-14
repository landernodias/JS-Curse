const pedidos = [
    {
        id: 420,
        nome: "Nelcione",
        alimento: "Sandubão de Bacon",
        bebida: "Suco de Limão",
    },
    {
        id: 152,
        nome: "Anna Claudia",
        alimento: "X-Salada",
        bebida: "Suco de Laranja",
    },
    {
        id: 33,
        nome: "Luiz",
        alimento: "Sanduiche de Queijo",
        bebida: "Refrigerante",
    },
    {
        id: 55,
        nome: "Iago",
        alimento: "Pizza",
        bebida: "Refrigerante",
    },
];

/**
 * O some verifica se apenas 1 dos valores do array equivale a sua condição
 **/

 const existeAlimento = pedidos.some((element) => { 
    return element.alimento === "Pizza"; 
 });

 console.log(existeAlimento)

