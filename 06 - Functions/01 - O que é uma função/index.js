/**
 * O que é uma função?
 * É um conjunto da instruções que executa uma tarefa ou caucula um valor
 */

// 1 - Functions Declaration

function isValidDeclaration() {
    const soma = 1 + 2;

    if(soma === 3){
        return true;
    }
    return false;
}

// console.log(isValid());

// 2 - Function expression

const isValidExpression = function(){
    return true;
};
// console.log(isValidExpression());
// 3 - Arrow Functions

const isValidArrow = (numA, numB) => {
    return numA * numB;
};

console.log(isValidArrow(5, 6));