const myArrayObj= [
    {
        nome: "Nelcione",
        sobrenome: "Dias",
    },
    {
        nome: "Anna Claudia",
        sobrenome: "Dias",
    },
    {
        nome: "Luzia 0",
        sobrenome: "Castro",
    },
    {
        nome: "Luzia 1",
        sobrenome: "Castro",
    },
    {
        nome: "Luzia 2",
        sobrenome: "Castro",
    },
    {
        nome: "Luzia 3",
        sobrenome: "Castro",
    },
];

myArrayObj.forEach((item, index) => {
    if(item.nome === "Anna Claudia"){
        return console.log("Minha noiva!");
    }
    console.log(item.nome, "index: ", index);
});