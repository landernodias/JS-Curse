let multiplicador = 1;
let result = 0;

while(multiplicador < 11){
    for(let i= 0; i <= 10; i++){
        result = multiplicador * i;
        console.log(`${multiplicador} X ${i} = ${result}`);
    }
    console.log();
    multiplicador++;
}
