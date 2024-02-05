const celToFah = document.getElementById("celToFah");
const celToKel = document.getElementById("celToKel");
const fahToCel = document.getElementById("fahToCel");
const fahToKel = document.getElementById("fahToKel");
const kelToCel = document.getElementById("kelToCel");
const kelToFah = document.getElementById("kelToFah");
const textbox = document.getElementById("textbox");
const result = document.getElementById("result");
let t;

function convert(){

    if (celToFah.checked) {
        t = Number(textbox.value)*(9/5) + 32;
        result.textContent = `${t.toFixed(1)}°F`; 
    } else if(celToKel.checked){
        t = Number(textbox.value) + 273.15
        result.textContent = `${t.toFixed(2)}K`
    } else if(fahToCel.checked){
        t = (Number(textbox.value)-32)*(5/9);
        result.textContent = `${t.toFixed(2)}°C`;
    } else if(fahToKel.checked){
        t = (Number(textbox.value)-32)*(5/9) + 273.15;
        result.textContent = `${t.toFixed(2)}K`;
    } else if(kelToCel.checked){
        t = Number(textbox.value) - 273.15;
        result.textContent = `${t.toFixed(2)}°C`
    } else if(kelToFah.checked){
        t = (Number(textbox.value)-273.15)*(9/5) + 32;
        result.textContent = `${t.toFixed(2)}°F`; 
    }
    else {
        result.textContent = "Select unit to convert";
    }
}