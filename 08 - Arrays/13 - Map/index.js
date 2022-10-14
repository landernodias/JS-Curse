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
        bebida: "Coca Cola",
    },
    {
        id: 55,
        nome: "Iago",
        alimento: "Pizza",
        bebida: "Refrigerante",
    },
];

/**
 * O MÉTODO MAP ALÉM DE ITERA O ARRAY É MUITO BOM PARA EDITAR O ITERADO ( RESUMINDO O DADOS DO ARRAY)
 * 
 */
// Muito usado para mapear um elemento e alterar os dados
pedidos.map((element, index) => {
    if(element.id == 152 && element.alimento == "X-Salada") {
        return (element.alimento = "kibe")
    }
});
console.log(pedidos);