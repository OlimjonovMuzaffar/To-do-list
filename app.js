"use strict";

let item = document.querySelector(".item2");
let btnEl = document.querySelector("button");
let inpEl = document.querySelector(".input");
let edit = document.querySelector(".onga");
let remove = document.querySelector(".chapga");
let blureL = document.querySelector(".blur");

let iEl = document.querySelector("i");

let array = [];
let count = 0;

function todoList() {
  btnEl.addEventListener("click", (e) => {
    count++;
    e.preventDefault();
    let valuesi = inpEl.value;

    let pEl = document.createElement("p");
    item.appendChild(pEl);
    pEl.textContent = valuesi;

    array.push(pEl.textContent);

    // BTNADD
    let btnAdd = document.createElement("button");
    pEl.appendChild(btnAdd);

    btnAdd.textContent = "Add";

    if (btnAdd.classList.contains("chapga")) {
      console.log("salom");
    } else {
      btnAdd.classList.add("chapga");
    }

    //BTNREMOV

    let btnRemov = document.createElement("button");
    pEl.appendChild(btnRemov);

    btnRemov.textContent = "Del";

    if (btnRemov.classList.contains("onga")) {
      console.log("salom");
    } else {
      btnRemov.classList.add("onga");
    }

    btnRemov.addEventListener("click", () => {
      pEl.remove();
    });

    btnAdd.addEventListener("click", (e) => {
      e.preventDefault();
    });

    console.log(count);
  });
}

todoList();
