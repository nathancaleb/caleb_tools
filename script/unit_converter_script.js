//DOM ELEMENTS - TEXTO
const inputUnitInitial = document.querySelector("#unit_converter_input");
const boxUnitFinal = document.querySelector(".unit_converter_result_text");
const unitTypeInitial = document.querySelector("#unit_converter_start");
const unitTypeFinal = document.querySelector("#unit_converter_final");

// DOM ELEMENT - BOTÃO
const changeUnitBtn = document.querySelector(".unit_converter_btn_box");

// Variavel que recebe valor do input
let unitValue = 0;

// FUNÇÃO DO BOTÃO PARA TROCAR AS UNIDADES
function changeUnit(){
    if(unitTypeInitial.textContent == "px"){
        unitTypeInitial.innerHTML = "rem";
        unitTypeFinal.innerHTML = "px";
    }
    else if(unitTypeInitial.textContent == "rem"){
        unitTypeInitial.innerHTML = "px";
        unitTypeFinal.innerHTML = "rem";
    }

    convertUnit();
}

function convertUnit(){
    let unitValue = parseFloat(inputUnitInitial.value);

    if(unitTypeInitial.textContent == "px"){
        let unitConversionFinal = parseFloat((unitValue / 16).toFixed(3));
        boxUnitFinal.innerHTML = unitConversionFinal;
    }
    else if(unitTypeInitial.textContent == "rem"){
        let unitConversionFinal = parseFloat((unitValue * 16).toFixed(3));
        boxUnitFinal.innerHTML = unitConversionFinal;
    }
}

inputUnitInitial.addEventListener("keyup", ()=>{
    
    convertUnit();
})
