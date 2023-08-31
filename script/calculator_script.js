
//DOM ELEMENTS
const plusBtn = document.getElementById("plus_button");
const subtractBtn = document.getElementById("minus_button");
const multiplyBtn = document.getElementById("mutiply_button");
const divisionBtn = document.getElementById("division_button");
const clearButton = document.getElementById("c_button");
const negativeButton = document.getElementById("negative_button")
const cancelButton = document.getElementById("ce_button")
const decimalButton = document.getElementById("decimal_button")
const percentButton = document.getElementById("percentage_button")
let calculatorScreen = document.getElementById("calculator_display");

// VARIAVEIS
let n1 = "";
let n1Start = false;

let n2 = "";
let n2Start = false;

let operate = "undefined";
let operateStatus = false;
let operateSymbol = "";

let resultFinal = "";
let handleResult = "";
let handleResultStatus = false;

let n1NegativeStatus = false;
let n2NegativeStatus = false;
let n1NegativeScreen = "";
let n2NegativeScreen = "";

let decimalStatus = false;


//NUMBEROS
function getNumber(number){

    if(n1Start == false && operateStatus == false){
        n1 = ""+number;
        n1Start = true;
        calculatorScreen.innerHTML = n1NegativeScreen+n1;
    }
    else if(n1Start == true && operateStatus == false){
        n1 = n1 + number;
        calculatorScreen.innerHTML = n1NegativeScreen+n1;
    }
    else if(n1Start == true && operateStatus == true && n2Start == false){
        n2 = ""+number;
        n2Start = true;
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol} ${n2NegativeScreen}${n2}`;
    }
    else if(n1Start == true && operateStatus == true && n2Start == true){
        n2 = n2 + number;
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol} ${n2NegativeScreen}${n2}`;
    }    
}

// OPERATE BUTTONS
// SUM BUTTON
plusBtn.addEventListener("click", function() {
    if (n1Start == false){
        n1 = "0";
        n1Start = true;
        operateStatus = true;
        operate = "sum";
        operateSymbol = "+";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
    }
    else if(n1Start == true && n2Start == true && handleResultStatus == false){
        result();
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        n2 = "";
        n2Start = false;
        n2NegativeStatus = false;
        n2NegativeScreen = "";
        operateStatus = true;
        operate = "sum";
        operateSymbol = "+";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
        handleResultStatus == false
    }
    else if(n1Start == true && n2Start == true && handleResultStatus == true ){
        result();
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        n2 = "";
        n2Start = false;
        n2NegativeStatus = false;
        n2NegativeScreen = "";
        operateStatus = true;
        operate = "sum";
        operateSymbol = "+";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
        handleResultStatus = false
    }
    else if(n1Start == true){
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        operateStatus = true
        operate = "sum";
        operateSymbol = "+";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
    }
});
//SUBTRACT BUTTON
subtractBtn.addEventListener("click", function() {
    if (n1Start == false){
        n1 = "0";
        n1Start = true;
        operateStatus = true;
        operate = "subtract";
        operateSymbol = "-";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
    }
    else if(n1Start == true && n2Start == true && handleResultStatus == false){
        result();
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        n2 = "";
        n2Start = false;
        n2NegativeStatus = false;
        n2NegativeScreen = "";
        operateStatus = true;
        operate = "subtract";
        operateSymbol = "-";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
        handleResultStatus == false
    }
    else if(n1Start == true && n2Start == true && handleResultStatus == true ){
        result();
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        n2 = "";
        n2Start = false;
        n2NegativeStatus = false;
        n2NegativeScreen = "";
        operateStatus = true;
        operate = "subtract";
        operateSymbol = "-";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
        handleResultStatus = false
    }
    else if(n1Start == true){
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        operateStatus = true
        operate = "subtract";
        operateSymbol = "-";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
    }
});
//MULTIPLY BUTTON
multiplyBtn.addEventListener("click", function() {
    if (n1Start == false){
        n1 = "0";
        n1Start = true;
        operateStatus = true;
        operate = "multiply";
        operateSymbol = "X";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
    }
    else if(n1Start == true && n2Start == true && handleResultStatus == false){
        result();
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        n2 = "";
        n2Start = false;
        n2NegativeStatus = false;
        n2NegativeScreen = "";
        operateStatus = true;
        operate = "multiply";
        operateSymbol = "X";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
        handleResultStatus == false
    }
    else if(n1Start == true && n2Start == true && handleResultStatus == true ){
        result();
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        n2 = "";
        n2Start = false;
        n2NegativeStatus = false;
        n2NegativeScreen = "";
        operateStatus = true;
        operate = "multiply";
        operateSymbol = "X";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
        handleResultStatus = false
    }
    else if(n1Start == true){
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        operateStatus = true
        operate = "multiply";
        operateSymbol = "X";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
    }
});
//DIVISION BUTTON
divisionBtn.addEventListener("click", function() {
    if (n1Start == false){
        n1 = "0";
        n1Start = true;
        operateStatus = true;
        operate = "division";
        operateSymbol = "÷";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
    }
    else if(n1Start == true && n2Start == true && handleResultStatus == false){
        result();
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        n2 = "";
        n2Start = false;
        n2NegativeStatus = false;
        n2NegativeScreen = "";
        operateStatus = true;
        operate = "division";
        operateSymbol = "÷";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
        handleResultStatus == false
    }
    else if(n1Start == true && n2Start == true && handleResultStatus == true ){
        result();
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        n2 = "";
        n2Start = false;
        n2NegativeStatus = false;
        n2NegativeScreen = "";
        operateStatus = true;
        operate = "division";
        operateSymbol = "÷";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
        handleResultStatus = false
    }
    else if(n1Start == true){
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        operateStatus = true
        operate = "division";
        operateSymbol = "÷";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
    }
});
//PERCENTAGE BUTTON
percentButton.addEventListener("click", function(){
    if (n1Start == false){
        n1 = "0";
        n1Start = true;
        operateStatus = true;
        operate = "percent";
        operateSymbol = "%";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
    }
    else if(n1Start == true && n2Start == true && handleResultStatus == false){
        result();
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        n2 = "";
        n2Start = false;
        n2NegativeStatus = false;
        n2NegativeScreen = "";
        operateStatus = true;
        operate = "percent";
        operateSymbol = "%";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
        handleResultStatus == false
    }
    else if(n1Start == true && n2Start == true && handleResultStatus == true ){
        result();
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        n2 = "";
        n2Start = false;
        n2NegativeStatus = false;
        n2NegativeScreen = "";
        operateStatus = true;
        operate = "percent";
        operateSymbol = "%";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
        handleResultStatus = false
    }
    else if(n1Start == true){
        if(n1NegativeStatus){
            n1NegativeScreen = "-"
        }else{
            n1NegativeScreen = ""
        }
        operateStatus = true
        operate = "percent";
        operateSymbol = "%";
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
        decimalStatus = false;
    }
})

// C AND CE BUTTONS

clearButton.addEventListener("click", function(){
    n1 = "";
    n1Start = false;
    n2 = "";
    n2Start = false;
    operate = "undefined";
    operateStatus = false;
    operateSymbol = "";
    resultFinal = "";
    calculatorScreen.innerHTML = "";
    n1NegativeStatus = false;
    n2NegativeStatus = false;
    n1NegativeScreen = "";
    n2NegativeScreen = "";
    decimalStatus = false;
    handleResult = "";
    handleResultStatus = false;
})

cancelButton.addEventListener("click", function(){
    if( operateStatus == true && resultFinal == ""){
        n2 = "";
        n2Start = false;
        n2NegativeStatus = false;
        n2NegativeScreen = "";
        decimalStatus = false;
        calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol}`;
    }
    else {
        n1 = "";
        n1Start = false;
        n2 = "";
        n2Start = false;
        operate = "undefined";
        operateStatus = false;
        operateSymbol = "";
        resultFinal = "";
        calculatorScreen.innerHTML = "";
        n1NegativeStatus = false;
        n2NegativeStatus = false;
        n1NegativeScreen = "";
        n2NegativeScreen = "";
        decimalStatus = false;
    }
})

// NEGATIVE AND DECIMAL BUTTON

negativeButton.addEventListener("click", function(){
    if(operateStatus == false){
        if(n1NegativeStatus == false){
            n1NegativeStatus = true
            n1NegativeScreen = "-"
            calculatorScreen.innerHTML = n1NegativeScreen+n1;
        }
        else if(n1NegativeStatus == true){
            n1NegativeStatus = false
            n1NegativeScreen = ""
            calculatorScreen.innerHTML = n1NegativeScreen+n1;
        }
    }
    else if(operateStatus == true){
        if(n2NegativeStatus == false){
            n2NegativeStatus = true
            n2NegativeScreen = "-"
            calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol} ${n2NegativeScreen}${n2}`;
        }
        else if(n2NegativeStatus == true){
            n2NegativeStatus = false
            n2NegativeScreen = ""
            calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol} ${n2NegativeScreen}${n2}`;
            
        }
    }
})

decimalButton.addEventListener("click", function(){
    if(operateStatus == false && decimalStatus == false){
        
        if(n1==""){
            n1 = "0,";
            n1Start = true;
            calculatorScreen.innerHTML = n1NegativeScreen+n1;
            decimalStatus = true;
        }else{
            n1 = n1 + ",";
            calculatorScreen.innerHTML = n1NegativeScreen+n1;
            decimalStatus = true;
        }        
    }
    else if(operateStatus == false && decimalStatus == true){
        alert("ATENCÃO: CASA DECIMAL JÁ DEFINIDA");
    }

    if(operateStatus == true && decimalStatus == false){
        
        if(n2==""){
            n2 = "0,"
            n2Start = true;
            decimalStatus = true;
            calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol} ${n2NegativeScreen}${n2}`;
        }else{
            n2 = n2 + ",";
            decimalStatus = true;
            calculatorScreen.innerHTML = `${n1NegativeScreen}${n1} ${operateSymbol} ${n2NegativeScreen}${n2}`;
        }
    }
    else if(decimalStatus == true && operateStatus == true){
        alert("ATENCÃO: CASA DECIMAL JÁ DEFINIDA");
    }
})

// CHECK DECIMAL

function isFloat(x) {
    if(!isNaN(x)) {
        if(parseInt(x) != parseFloat(x)) {
                return true;
      }
    }   
    return false;
}

// RESULT FUNCTION

function result(){

    let checkNegative = false
    let checkDecimal = false

    function printResult(){
        if(checkDecimal){
            n1=n1.toString();
            n1 = n1.replace(".",",");
            n2=n2.toString();
            n2 = n2.replace(".",",");
            resultFinal = parseFloat(resultFinal).toFixed(2)     
            resultFinal=resultFinal.toString();
            resultFinal = resultFinal.replace(".",",");
            calculatorScreen.innerHTML = `${n1} ${operateSymbol} ${n2} = ${resultFinal}`;
            handleResultStatus = true;
        }
        else if(isFloat(resultFinal)){
            n1=n1.toString();
            n2=n2.toString();
            resultFinal = parseFloat(resultFinal).toFixed(2)            
            resultFinal=resultFinal.toString();
            resultFinal = resultFinal.replace(".",",");
            calculatorScreen.innerHTML = `${n1} ${operateSymbol} ${n2} = ${resultFinal}`;
            handleResultStatus = true;
        }
        else{
            n1=n1.toString();
            n2=n2.toString();
            resultFinal=resultFinal.toString();
            calculatorScreen.innerHTML = `${n1} ${operateSymbol} ${n2} = ${resultFinal}`;
            handleResultStatus = true;
        }
    }


    if (n2Start == false){
        n2 = "0";
        n2Start = true;
        result();
    }
    else if( n1Start == true && n2Start == true && operateStatus == true){
        //CHECK IF THE NUMBER STRING HAVE << , >> IF HAVE, CHANGE TO << . >> AND CONVERT TO INT OU FLOAT
        if(n1.includes(",")){
            n1 = n1.replace(",",".");
            n1=parseFloat(n1).toFixed(2);
            checkDecimal = true;
        }
        else{
            n1 = parseInt(n1);
        }

        if(n2.includes(",")){
            n2 = n2.replace(",",".");
            n2=parseFloat(n2).toFixed(2);
            checkDecimal = true;
        }
        else{
            n2 = parseInt(n2);
        }
        //CHECK IF THE NUMBERS ARE NEGATIVE
        if(checkNegative == false){
            if(n1NegativeStatus == true && n2NegativeStatus == false){
                n1=n1*-1;
                checkNegative = true
            }
            else if(n1NegativeStatus == false && n2NegativeStatus == true){
                n2=n2*-1;
                checkNegative = true
            }else if(n1NegativeStatus == true && n2NegativeStatus == true){
                n1=n1*-1;
                n2=n2*-1;
                checkNegative = true
            }else{
                checkNegative = true
            }
        }
        //IF FOR SUM
            if(checkNegative == true && operate == "sum"){
                resultFinal=n1+n2;
                
                handleResult=resultFinal 
                n1NegativeStatus=false
                n2NegativeStatus=false
                printResult();  
                n1=resultFinal;
                if(handleResult < 0){
                    n1NegativeStatus = true
                    if(n1.includes("-")){
                        n1 = n1.replace("-","");
                        
                    }
                }else{
                    n1NegativeStatus = false
                }
                n2="";
                n1Start = true;
                n2Start = false;
            } //IF FOR SUBTRACT
            else if(checkNegative == true && operate == "subtract"){
                resultFinal=n1-n2;

                handleResult=resultFinal
                n1NegativeStatus=false
                n2NegativeStatus=false
                printResult();
                n1=resultFinal;
                if(handleResult < 0){
                    n1NegativeStatus = true
                    if(n1.includes("-")){
                        n1 = n1.replace("-","");
                    }
                }else{
                    n1NegativeStatus = false
                }
                n2="";
                n1Start = true;
                n2Start = false;
            } //IF FOR MULTIPLY
            else if(checkNegative == true && operate == "multiply"){
                resultFinal=n1*n2;
                
                handleResult=resultFinal
                n1NegativeStatus=false
                n2NegativeStatus=false
                printResult();
                n1=resultFinal;
                if(handleResult < 0){
                    n1NegativeStatus = true
                    if(n1.includes("-")){
                        n1 = n1.replace("-","");
                    }
                }else{
                    n1NegativeStatus = false
                }
                n2="";
                n1Start = true;
                n2Start = false;
            } //IF FOR DIVISION
            else if(checkNegative == true && operate == "division"){
                resultFinal=n1/n2;
                
                handleResult=resultFinal
                n1NegativeStatus=false
                n2NegativeStatus=false
                printResult();
                n1=resultFinal;
                if(handleResult < 0){
                    n1NegativeStatus = true
                    if(n1.includes("-")){
                        n1 = n1.replace("-","");
                    }
                }else{
                    n1NegativeStatus = false
                }
                n2="";
                n1Start = true;
                n2Start = false;
            } //IF FOR PERCENTAGE
            else if(checkNegative == true && operate == "percent"){
                resultFinal=(n1/100)*n2;
                
                handleResult=resultFinal
                n1NegativeStatus=false
                n2NegativeStatus=false
                printResult();
                n1=resultFinal;
                if(handleResult < 0){
                    n1NegativeStatus = true
                    if(n1.includes("-")){
                        n1 = n1.replace("-","");
                    }
                }else{
                    n1NegativeStatus = false
                }
                n2="";
                n1Start = true;
                n2Start = false;
            }
    }
}
