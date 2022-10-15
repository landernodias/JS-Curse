"use strict";

// dom [principal]
// fragmentDOM [secundary fora do dom principal]

const ul = document.querySelector("ul");

const fragment = document.createDocumentFragment();

const lanches = ["Lanche 1", "Lanche 2", "Lanche 3", "Lanche 4",];

//cria as li apartir de lanches
lanches.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    // ul.append(li);
    fragment.append(li);
});

console.log(fragment);
ul.append(fragment);

//ESSE PROCESSO USANDO FRAGMENT MELHORA EM PERFORMASSE