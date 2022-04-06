"use strict";

// SELECTORS
const billElement = document.getElementById("bill");
const personNumberElement = document.getElementById("persons");
const tipElement = document.querySelectorAll(".button-tip");
const customTipElement = document.getElementById("button-custom");
const tipsCalculatedElement = document.getElementById("tips");
const totalSumElement = document.getElementById("total");
const resetButton = document.getElementById("button-reset");
const inputsEl = document.querySelectorAll(".input-number");

//  CODE
let tips;
let total;

const renderSpan = function (inputField, message = "Can't be zero") {
    let inputErrorMessage = document.createElement("span");
    inputErrorMessage.classList.add("error-message");
    inputErrorMessage.textContent = message;
    inputField.parentNode.prepend(inputErrorMessage);
};

const calculate = function (e) {
    let bill = +billElement.value.trim();
    let personCount = +personNumberElement.value.trim();
    let selectedTips = +e.target.innerText.replace("%", "") / 100;

    if (e.type === "input") {
        selectedTips = +e.target.value.trim() / 100;
    }

    tips = parseFloat((bill * selectedTips) / personCount).toFixed(2);
    total = parseFloat((bill * selectedTips + bill) / personCount).toFixed(2);

    tipsCalculatedElement.innerText = "$" + tips;
    totalSumElement.innerText = "$" + total;
};

tipElement.forEach((button) => {
    button.addEventListener("click", function (e) {
        let validInput = false;
        customTipElement.value = "";

        inputsEl.forEach((input) => {
            if (input.value === "" || !input || input.value < 0) {
                validInput = false;
                input.classList.add("error");
                renderSpan(input);
            } else {
                validInput = true;
                if (input.classList.contains("error")) {
                    input.classList.remove("error");
                    let parent = input.parentNode;
                    parent.removeChild(parent.firstElementChild);
                }
            }
        });

        if (validInput) {
            calculate(e);
        } else if (!validInput) {
        }
    });
});

customTipElement.addEventListener("input", function (e) {
    let value = parseInt(this.value);
    if (value < 1) {
        this.value = 1;
    } else if (value > 1000) {
        this.value = 1000;
    } else {
        calculate(e);
    }
});

resetButton.addEventListener("click", function (e) {
    totalSumElement.innerText = "$0.00";
    tipsCalculatedElement.innerText = "$0.00";
    billElement.value = "0";
    personNumberElement.value = "0";
    customTipElement.value = "";
    tips = 0;
    total = 0;
});
