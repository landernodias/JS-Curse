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

for(let item of myArrayObj) {
    if(item.nome === "Anna Claudia") {
        console.log("Encontrei o Mozão!");
        continue;
    }
    
    if(item.nome === "Luzia 1"){
        console.log("Encontrei a Sogra!");
        break;
    }
    console.log(item);
    // break;
}