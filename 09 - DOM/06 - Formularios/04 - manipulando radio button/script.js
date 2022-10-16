"use strict";

const form = document.forms.namedItem("select-radio");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const radio = form.radio;// radio é o name no form
    // console.log(radio.value);
    submit.innerHTML = radio.value;
    
    // radio.forEach( res => {
    //     // console.log(res.value);
    //     if(res.checked){ // verifica se está checado
    //         console.log(res);
    //     }
    // });
});


form.radio.forEach( res => {
    res.addEventListener('change', (event) => {
        // console.log(event.target);
        const { target } = event;

        if(target.checked) {
            console.log(target.value);
            change.innerHTML = target.value;
        }
    });
});