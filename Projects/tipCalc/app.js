const billAmount = document.querySelector("#billAmount");
const tipPercentage = document.querySelector("#tipPercentage");
const form = document.querySelector("form");
const result = document.querySelector("#finalAmount");


form.addEventListener("submit", function(e){
    e.preventDefault();
    const finalAmount = parseFloat(billAmount.value)
    const finalTipPercentage = parseFloat(tipPercentage.value)
    const tip = finalTipPercentage/100;
    const totalAmount = (finalAmount * tip) + finalAmount;
    result.innerText = `${totalAmount}`

})
