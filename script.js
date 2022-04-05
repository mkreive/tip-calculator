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
const calculate = function (e) {
    let bill = +billElement.value.trim();
    let personCount = +personNumberElement.value.trim();
    let selectedTips = +(e.target.value.replace("%", "") / 100);

    let tips = parseFloat((bill * selectedTips) / personCount).toFixed(2);
    let total = parseFloat((bill * selectedTips + bill) / personCount).toFixed(
        2
    );

    tipsCalculatedElement.innerText = "$" + tips;
    totalSumElement.innerText = "$" + total;
};

const renderSpan = function (parentEl) {
    let inputErrorMessage = document.createElement("span");
    inputErrorMessage.classList.add("error-message");
    inputErrorMessage.textContent = "Can't be zero";
    parentEl.parentNode.prepend(inputErrorMessage);
};

tipElement.forEach((button) => {
    button.addEventListener("click", function (e) {
        if (!personNumberElement.value && !billElement.value) {
            personNumberElement.classList.add("error");
            billElement.classList.add("error");
            renderSpan(personNumberElement);
            renderSpan(billElement);
        } else if (!billElement.value) {
            personNumberElement.classList.remove("error");
            personNumberElement.parentNode.firstChild.remove();
            billElement.classList.add("error");
            renderSpan(billElement);
        } else if (!personNumberElement.value) {
            billElement.classList.remove("error");
            billElement.parentNode.firstChild.remove();
            personNumberElement.classList.add("error");
            renderSpan(personNumberElement);
        } else {
            personNumberElement.classList.remove("error");
            billElement.classList.remove("error");
            calculate(e);
        }
    });
});

customTipElement.addEventListener("input", function (e) {
    calculate(e);
});

resetButton.addEventListener("click", function () {
    totalSumElement.innerText = "$0.00";
    tipsCalculatedElement.innerText = "$0.00";
    billElement.value = "0";
    personNumberElement.value = "0";
});
