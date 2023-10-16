// DOM ELEMENTS
const inputTemperature = document.querySelector("#temperature_input");
const temperatureConvertText = document.querySelector(".temperarature_result_text");
const temperatureInitial = document.getElementsByName("temperature");
const temperatureFinal = document.getElementsByName("temperature_final");

// VARIAVEL VAI RECEBER O VALOR DA TEMPERATURA
let temperatureValue = 0;

// VARIAVEL P/ TEMPERATURAS SELECIONADAS
let temperatureInitialSelected = ""
let temperatureFinalSelected = ""

// // VERIFICA SE A OPERAÇÃO PODE SER REALIZADA
// let inputStatus = false;
// let operationInitialStatus = false;
// let operationFinalStatus = false;

// FUNÇÃO PARA CHECAR VALOR INPUTADO DE TEMPERATURA

function temperatureValueCheck(){
    temperatureValue = parseInt(inputTemperature.value)

    if(Number.isInteger(temperatureValue)){
        // VERIFICAR TEMPERATURA INICIAL ESCOLHIDA
        for(let i = 0; i < temperatureInitial.length; i++){
            if(temperatureInitial[i].checked){
                temperatureInitialSelected = temperatureInitial[i].value;
            }
        }
        // VERIFICAR TEMPERATURA FINAL ESCOLHIDA
        for(let i = 0; i < temperatureFinal.length; i++){
            if(temperatureFinal[i].checked){
                temperatureFinalSelected = temperatureInitial[i].value;
            }
        }   
    }
}


// FUNÇÃO PARA CONVERSÃO
function temperatureConversion(){
    if(temperatureInitialSelected == "celcius"){
        if(temperatureFinalSelected == "celcius"){
            alert("Temperatura inicial é igual a temperatura final, favor selecione outra temperatura");
        }
        else if(temperatureFinalSelected == "fahrenheit"){
            const conversionFinal = (temperatureValue * 9/5) + 32;
            temperatureConvertText.innerHTML = conversionFinal;
        }
        else if(temperatureFinalSelected == "kelvin"){
            const conversionFinal = temperatureValue + 273.15;
            temperatureConvertText.innerHTML = conversionFinal;
        }
    }
    else if(temperatureInitialSelected == "fahrenheit"){
        if(temperatureFinalSelected == "fahrenheit"){
            alert("Temperatura inicial é igual a temperatura final, favor selecione outra temperatura");
        }
        else if(temperatureFinalSelected == "celcius"){
            const conversionFinal = (temperatureValue - 32) * 5/9;
            temperatureConvertText.innerHTML = conversionFinal;
        }
        else if(temperatureFinalSelected == "kelvin"){
            const conversionFinal = (temperatureValue - 32) * 5/9 + 273.15;
            temperatureConvertText.innerHTML = conversionFinal;
        }
    }
    else if(temperatureInitialSelected == "kelvin"){
        if(temperatureFinalSelected == "kelvin"){
            alert("Temperatura inicial é igual a temperatura final, favor selecione outra temperatura");
        }
        else if(temperatureFinalSelected == "celcius"){
            const conversionFinal = temperatureValue - 273.15;
            temperatureConvertText.innerHTML = conversionFinal;
        }
        else if(temperatureFinalSelected == "fahrenheit"){
            const conversionFinal = (temperatureValue - 273.15) * 9/5 + 32;
            temperatureConvertText.innerHTML = conversionFinal;
        }
    }
}

temperatureInitial.forEach(rb=>rb.addEventListener("change", function(){
    temperatureValueCheck();
    temperatureConversion();
}))

temperatureFinal.forEach(rb=>rb.addEventListener("change", function(){
    temperatureValueCheck();
    temperatureConversion();
}))

inputTemperature.addEventListener("keyup",() => {
    
    temperatureValueCheck();
    temperatureConversion();
})

// CASO BACKSPACE OU DELETE FOR CLICADO QUANDO INPUT ISNAN, APAGA TUDO
// inputTemperature.addEventListener("keydown", function(e){
//     if(isNaN(inputTemperature.value)){
//         if(e.key == "Backspace" || e.key == "delete"){
//             console.log("bs ou del clicados")
//             inputTemperature.value = "";
//         }
//     }
// })