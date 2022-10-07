/*
    1 - nome da função

    2 - Retorno
    3 - Não tem Hoisting
    4 - Arguments
*/

function nomeFunc() {
    return "Nelcione Dias"
}

console.log(nomeFunc());

const nomeFuncArrow = () => {
    return "Nelcione Dias"
}

console.log(nomeFuncArrow());


const nomeFuncArrowReturn = () => "Nelcione Dias";

console.log(nomeFuncArrowReturn());


// console.log(nomeFuncArrowHoisting()); //Gera um erro hoisting não funciona para funções arrow
const nomeFuncArrowHoisting = () => {
    return "Nelcione Dias";
}

const nomeFuncArrowArguments = () => {
    return arguments;
}

// console.log(nomeFuncArrowArguments()) // gera um erro pois arrow functions também não tem arguments


const nomeFuncParams = (param) => param;
console.log(nomeFuncParams(2));
/*
    5 - Não pode ser invocado com new
*/

// function novaFunc(){
//     return console.log(123);
// }

// new novaFunc();

// const novaFuncArrow = () => {
//     return console.log(123);
// }

class newFunc {
    constructor(
        nome

    ){
        this.nome = nome;
    }
}

const newClass = new newFunc("Nelcione Dias");

console.log(newClass.nome);

// new nomeFuncArrow(); // gera um erro pois ele não tem construtor

/*
    6 - Contexo
    Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico.

    Isso significa que arrow functions herdam o contexto local de onde foi declarado,
    enquanto o modelo normal possui o contexto associado oao objeto que ele está vinculado
    no momento da chamada

    se ele não estiver associado a nenguém na chamada, ele assumirá this automaticamente
    como o contexto global, que ni caso dos navegadores é window    
*/

const lanches = {
    cardapio: [
        {
            nome: "x-salada",
            preco: "R$ 30",
        },
        {
            nome: "x-bolovo",
            preco: "R$ 25",
        },
    ],
    meupedigoFunc: function(select){
        return console.log(this.cardapio[select]);
    },
    meuPedidoFuncTimeOut: function() {
        setTimeout(function(){
            console.log(this.cardapio);
            console.log(this);
        }.bind(this), 2000);
    },
    meuPedidoFuncArrow: (select) => {
        this.cardapio = [
            {
                nome: "x-salada",
                preco: "R$ 30",
            },
            {
                nome: "x-bolovo",
                preco: "R$ 25",
            },
        ];

        return console.log(this.cardapio[select]); // gera um erro não consegue pegar um contexto acima dele
    },
};

lanches.meupedigoFunc(1);
lanches.meuPedidoFuncArrow(1);
lanches.meuPedidoFuncTimeOut();


/*
    7 - Contrutor
    Arrow functions não podem ser constructors, então é possivel usar operador new com a mesma,
*/

