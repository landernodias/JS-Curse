// function soma(number1, number2){
//     if (typeof number1 === "number" && typeof number2 === "number") {
//         return number1 + number2;
//     }
//     return "numero Invalid";
// }

// console.log(soma(soma(1,3),soma(1, soma(2,3))));

// function subtracao() {
//     return arguments;
// }

// console.log(subtracao(0,1,"abc"));

const subtracao = (num1, num2) => {
    if(typeof num1 === "number" && typeof num2 === "number" && num2 != 0){
        return num1 - num2;
    }
    return "Number invalid"
}

console.log(subtracao(2,0));
