const celsius = document.querySelector("#celcius");
const Farenheit = document.querySelector("#Farenheit");
const kelvin = document.querySelector("#Kelvin");
const form = document.querySelector("form");

const celsiusNum = celsius.parseFloat(celsius.value)
const farenheitNum = Farenheit.parseFloat(Farenheit.value)
const kelvinNum = Farenheit.parseFloat(kelvin.value)

form.addEventListener("submit", function(e){
    e.preventDefault();

})


function celsiusToFahrenheit(celsiusNum) {
  return (celsiusNum * 9/5) + 32;
}
function fahrenheitToCelsius(farenheitNum) {
  return (farenheitNum - 32) * 5/9;
}
function celsiusToKelvin(celsiusNum) {
  return celsiusNum + 273.15;
}
function kelvinToCelsius(kelvinNum) {
  return kelvinNum - 273.15;
}
function fahrenheitToKelvin(fahrenheitNum) {
  return (fahrenheitNum - 32) * 5/9 + 273.15;
}
function kelvinToFahrenheit(kelvinNum) {
  return (kelvinNum - 273.15) * 9/5 + 32;
}
