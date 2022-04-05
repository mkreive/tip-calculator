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
const renderSpan = function (parentEl) {
    let inputErrorMessage = document.createElement("span");
    inputErrorMessage.classList.add("error-message");
    inputErrorMessage.textContent = "Can't be zero";
    parentEl.parentNode.prepend(inputErrorMessage);
};

tipElement.forEach((button) => {
    button.addEventListener("click", function (e) {
        let tipsSelected = +e.target.innerText.replace("%", "") / 100;
        let bill = billElement.value.trim();
        let personCount = personNumberElement.value.trim();
        let tipsPerPerson;
        let totalAmountPerPerson;

        if (!personNumberElement.value && !billElement.value) {
            // personNumberElement.classList.add("error");
            // billElement.classList.add("error");
            // renderSpan(personNumberElement);
            // renderSpan(billElement);
            // } else if (!billElement.value) {
            //     billElement.classList.add("error");
            //     personNumberElement.classList.remove("error");
            //     renderSpan(billElement);
            // } else if (!personNumberElement.value) {
            //     billElement.classList.remove("error");
            //     personNumberElement.classList.add("error");
            //     renderSpan(personNumberElement);
        } else {
            personNumberElement.classList.remove("error");
            billElement.classList.remove("error");

            let tips = bill * tipsSelected;
            tipsPerPerson = parseFloat(tips / +personCount).toFixed(2);
            let totalAmount = +bill + +tips;
            totalAmountPerPerson = parseFloat(
                totalAmount / +personCount
            ).toFixed(2);

            tipsCalculatedElement.innerText = "$" + tipsPerPerson;
            totalSumElement.innerText = "$" + totalAmountPerPerson;
        }
    });
});

resetButton.addEventListener("click", function () {
    totalSumElement.innerText = "$0.00";
    tipsCalculatedElement.innerText = "$0.00";
    billElement.value = "0";
    personNumberElement.value = "0";
});
