const pedidos = [
    // {
    //     id: 420,
    //     nome: "Nelcione",
    //     alimento: "Sandubão de Bacon",
    //     bebida: "Suco de Limão",
    // },
    // {
    //     id: 152,
    //     nome: "Anna Claudia",
    //     alimento: "X-Salada",
    //     bebida: "Suco de Laranja",
    // },
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
 *É bacana entender que, se você tem uma condição, ela vai tratar toda seu array,
 *assim podemos verificas se eles estão ok
 **/

 const temRefri = pedidos.every((element) => { // não tem apenas tem coisa amis que refrigerante
    return element.bebida === "Refrigerante"; // retorna true se tiver só refrigerante
 });

 console.log(temRefri);