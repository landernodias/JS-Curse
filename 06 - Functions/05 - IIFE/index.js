// IIFE = Immediately Invoked Function Expression
// IIFE = Expressão de função invocada imediatamente

(function() {

})();

function consol(con) {
    return console.log(con);
}

// consol("Nelcione Dias");

//Função autoivocalvel não pode ser alterada ela fica isolada
(function() {
    return console.log("Nelcione")
})();

(function(num1, num2){
    const calc = num1 + num2;
    console.log(calc)
})(1,2);

// função auto invocavel utilizando arrowFunction
// ((win, doc) => {
//     console.log(win);
//     console.log(doc);
// })(window, document);

(() => {
    const teste = "teste";
    console.log(teste)
})();