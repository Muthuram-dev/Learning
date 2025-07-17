const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");
const clearBtn = document.querySelector("#clear");

celsius.addEventListener("input", function () {
    const val = parseFloat(celsius.value);
    if (!isNaN(val)) {
        fahrenheit.value = ((val * 9/5) + 32).toFixed(2);
        kelvin.value = (val + 273.15).toFixed(2);
    } else {
        alert("Please enter a valid number");
    }
});

fahrenheit.addEventListener("input", function () {
    const val = parseFloat(fahrenheit.value);
    if (!isNaN(val)) {
        celsius.value = ((val - 32) * 5/9).toFixed(2);
        kelvin.value = (((val - 32) * 5/9) + 273.15).toFixed(2);
    } else {
        alert("Please enter a valid number");
    }
});

kelvin.addEventListener("input", function () {
    const val = parseFloat(kelvin.value);
    if (!isNaN(val)) {
        celsius.value = (val - 273.15).toFixed(2);
        fahrenheit.value = ((val - 273.15) * 9/5 + 32).toFixed(2);
    } else {
        alert("Please enter a valid number");
    }
});


clearBtn.addEventListener("click", function(){
  fahrenheit.value = "";
  kelvin.value = "";
  celsius.value = "";
})

