/**
 * IMC é a sigla para Índice de Massa Corpórea,
 * parametro adotado pela Organização Mundial de Saúde
 * para calcular o peso ideal de cada pessoa
 * 
 * Como calcular o IMC?
 * O IMC é calculado divindo o peso (em kg) pela
 * altura ao quadrado (em m), de acordo com a seguinte formula: IMC = peso / (autura x altura).
 * 
 * E nosso calculo devemos retornar os seguintes valores para o usuário
 * 
 * Resultado do Calc    |    Resultado para o usuário
 * Abaixo de 17         |   Muito abaixo do Peso
 * Entre 17 e 18,49     |   Abaixo do peso
 * Entre 18,5 e 24,99   |   Peso normal
 * Entre 25 e 29,99     |   Acima do Peso
 * Entre 30 e 34,99     |   Obesidade I
 * Entre 35 e 39,99     |   Obesidade II
 * 
 */

const peso = 93;
const altura = 1.78;

const IMC = (peso / (Math.pow(altura, 2))).toFixed(2);

if(IMC < 17 ) {
    console.log(`Seu IMC de ${IMC} é: "Muito abaixo do peso!"`);
} else if(IMC >= 17 && IMC <= 18.49){
    console.log(`Seu IMC de ${IMC} é: "Abaixo do peso!"`);
} else if(IMC >= 18.5 && IMC <= 24.99){
    console.log(`Seu IMC de ${IMC} é: "Peso Normal"`);
} else if (IMC >= 25 && IMC <= 29,99) {
    console.log(`Seu IMC de ${IMC} é: "Acima do Peso"`);
} else if (IMC >= 30 && IMC <= 34.99) {
    console.log(`Seu IMC de ${IMC} é: "Obesidade I"`);
} else if (IMC >= 35 && IMC <= 39.99) {
    console.log(`Seu IMC de ${IMC} é: "Obesidade II"`);
} else {
    console.log("Obesidade morbida");
}
