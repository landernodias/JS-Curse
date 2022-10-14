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
 * Nome bem sujestivo também, mas ele procura e te retorna o primeiro valor encontrado no array
 **/

const findId = pedidos.find((element, index) => {
    return element.bebida === "Refrigerante";
});

console.log(findId);
