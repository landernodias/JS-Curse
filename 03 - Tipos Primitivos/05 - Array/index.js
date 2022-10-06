console.log([1, 2, 3, 4, 5]); // lista de number
console.log(["maria", "João", "Pedro"]); // lista de string
console.log([true, false]); // lista de boolean
console.log(['A', "Maria", 1, 2, true]); // lista de uitas coisas

const pessoas = ["nelcione", "dias", 1, 2].forEach((res, index) => {
    console.log("Res: " + res, "index " + index);
});
const pessoas2 = ["nelcione", "dias", 1, 2].forEach((res) => {
    console.log(res);
});
