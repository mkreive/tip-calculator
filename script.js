"use strict";

// SELECTORS
const billElement = document.getElementById("bill");
const personNumberElement = document.getElementById("persons");
const tipElement = document.querySelectorAll(".button-tip");
const customTipElement = document.getElementById("button-custom");
const tipsCalculatedElement = document.getElementById("tips");
const totalSumElement = document.getElementById("total");
const resetButton = document.getElementById("button-reset");

//  CODE

tipElement.forEach((button) => {
    let bill = billElement.value.trim("");
    let tips;
    let totalAmount;

    button.addEventListener("click", function (e) {
        let tipsSelected = +e.target.innerText.replace("%", "") / 100;
        console.log(tipsSelected);
        if (!personNumberElement.value) {
            personNumberElement.classList.add("error");
        } else if (!billElement.value) {
            billElement.classList.add("error");
        } else {
            tips = bill * tipsSelected;
            totalAmount = bill + tips;
            tipsCalculatedElement.innerText = tips;
            totalSumElement.innerText = totalAmount;
        }
    });
});
