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
    button.addEventListener("click", function (e) {
        let tipsSelected = +e.target.innerText.replace("%", "") / 100;
        let bill = billElement.value.trim();
        let personCount = personNumberElement.value.trim();
        let tips;
        let totalAmount;

        if (!personNumberElement.value) {
            personNumberElement.classList.add("error");
        } else if (!billElement.value) {
            billElement.classList.add("error");
        } else {
            tips = parseFloat(bill * tipsSelected).toFixed(2);
            totalAmount = +bill + +tips;
            console.log(tips);
            console.log(totalAmount);
        }
    });
});
