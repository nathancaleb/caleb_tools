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
    if(temperatureInitialSelected == "celsius"){
        if(temperatureFinalSelected == "celsius"){
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
        else if(temperatureFinalSelected == "celsius"){
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
        else if(temperatureFinalSelected == "celsius"){
            const conversionFinal = temperatureValue - 273.15;
            temperatureConvertText.innerHTML = conversionFinal;
        }
        else if(temperatureFinalSelected == "fahrenheit"){
            const conversionFinal = (temperatureValue - 273.15) * 9/5 + 32;
            temperatureConvertText.innerHTML = conversionFinal;
        }
    }
}

// Adiciona Escutador de evento de alteração para o menu inicial
temperatureInitial.forEach(rb=>rb.addEventListener("change", function(){
    temperatureValueCheck();
    temperatureConversion();
}))

// Adiciona Escutador de evento de alteração para o menu ifinal
temperatureFinal.forEach(rb=>rb.addEventListener("change", function(){
    temperatureValueCheck();
    temperatureConversion();
}))

// Adiciona Escutador de evento de tecla para o input de temperatura
inputTemperature.addEventListener("keyup",() => {
    
    temperatureValueCheck();
    temperatureConversion();
})