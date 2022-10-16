"use strict";

const form = document.forms.namedItem("select-checkbox");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

let checkedValues = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const checkbox = form.checkbox;
    submit.innerHTML = checkedValues;
});

form.checkbox.forEach((element) => {
    element.addEventListener("change", (event) => {
        hasChecked(event, element);
        change.innerHTML = checkedValues;
    });
});

const hasChecked = (event, element) => {
    const { target } = event; //desestrutura o elemento evento
    if(target.checked){ // verifica se esta checado
        checkedValues.push(element.value);// se esta checado coloca no vetor
    }
    if(!target.checked){
        return checkedValues.map( (checkedValue, index) => { //varre o vetor e verifica se o elemento est ano vetor 
            if(element.value === checkedValue){ // verifica se o elemento passado é igual o do vetor
                return checkedValues.splice(index, 1); // se já existe remove do vetor
            }
        });
    }
}