// caixas de Texto
const qtyDrawNumbers = document.querySelector("#qty_draw_numbers");
const drawStartInterval = document.querySelector("#draw_number_start_interval");
const drawEndInterval = document.querySelector("#draw_number_end_interval")

// Area para impressão dos resultados
const displayResults = document.querySelector(".draw_numbers_display_box")

// Variavel para verificar se algum sorteio ja foi realizado
let startedDraw = false
// Variavel para contar o numero de sorteios realizados
let numberOfDraw = 0

// Função para Sortear Numero
function drawNumber(){

    const startIntervalNum = parseInt(drawStartInterval.value);
    const endIntervalNum = parseInt(drawEndInterval.value);
    const numberOfNumbers = parseInt(qtyDrawNumbers.value);

    let finalNumber = []
    let finalArray = []
    
    const numberRule = /^[0-9]+$/;
    
    function arrayIntervalNumbers(){
        // variavel que vai receber os numeros que serão sorteados
        const IntervalNumbers = [];
        
        // Criando array com os numeros que serão sorteados
        for(let i = 0; i < (endIntervalNum - startIntervalNum)+1; i++){
            IntervalNumbers[i] = startIntervalNum+i;
        }

        return IntervalNumbers;
    }

    function printResult(resultType){
        // DOM ELEMENTS que seram criados para imprimir os resultados na tela
        const resultBox = document.createElement("div");
        const resultTextBox = document.createElement("div");
        const drawTime = document.createElement("div");

        // Atribuindo classes aos DOM ELEMENTS que seram criados
        resultBox.classList.add("drawed_number_box");
        resultTextBox.classList.add("drawed_number_text_box");
        drawTime.classList.add("drawed_time_box");

        displayResults.style.display = "flex";

        // Verifico se já foi realizado algum sorteio
        if(startedDraw){
            let nextresultBox = displayResults.querySelector(":first-child");
            displayResults.insertBefore(resultBox, nextresultBox);
        }
        else{
            displayResults.appendChild(resultBox);
            startedDraw = true;
        }

        // Criando a caixa que ira receber os numeros
            resultBox.appendChild(resultTextBox);

            // Caso resultado multiplo
            if(Array.isArray(resultType)){
               for(let i = 0; i < resultType.length; i++) {
                
                // DON ELEMENT para o numero + CLASS
                const numberBox = document.createElement("span");
                numberBox.classList.add("numbers_box");

                let drawedNumber = ""

                // Atribui o valor e adiciona virgula excerto se for o ultimo numero
                if(i !== resultType.length-1){
                    drawedNumber = document.createTextNode(`${resultType[i]}, `)
                }else{
                    drawedNumber = document.createTextNode(resultType[i])
                }
                    numberBox.appendChild(drawedNumber);
                    resultTextBox.appendChild(numberBox);
               }
            }
            // Caso resultado unico
            else{
                // DON ELEMENT para o numero
                const numberBox = document.createElement("span");
                numberBox.classList.add("numbers_box");

                // Atribui valor ao SPAN e imprime na tela
                const drawedNumber = document.createTextNode(resultType)
                numberBox.appendChild(drawedNumber);
                resultTextBox.appendChild(numberBox);
            }

            // Impressão do numero do sorteio
            resultBox.appendChild(drawTime);
            drawTime.innerHTML = `${numberOfDraw}º Resultado`
        
    }

    // Verificar se a quantidade de numeros a ser sorteado é valido 
    if(qtyDrawNumbers.value < 1 || (qtyDrawNumbers.value).match(numberRule) == false || (qtyDrawNumbers.value).match(numberRule) == null){
        alert("Total de números a sortear invalido. Favor inserir número valido.");
    }
    // Verifica se o intervalo numérico é valido
    else if( endIntervalNum < startIntervalNum ||
             isNaN(startIntervalNum) == true ||
             isNaN(endIntervalNum) == true){
                if(endIntervalNum < startIntervalNum){
                    alert("Valor inicial dos números a serem sorteados é maior que o número final. Favor inserir intervalo valido.");
                }else{
                    if(isNaN(startIntervalNum) == true){
                        alert("Valor inicial dos números a serem sorteados é invalido. Favor inserir número valido.");
                    }

                    if(isNaN(endIntervalNum) == true){
                        alert("Valor final dos números a serem sorteados é invalido. Favor inserir número valido.");
                    }
                }
    }
    // Se mais de um número for sorteado
    else if(qtyDrawNumbers.value > 1){
        
        let intervalNumbers = arrayIntervalNumbers();

        // Sorteando o numero, retirando do array conjunto e atribuindo ao array final
        for(let i = 0; i < numberOfNumbers; i++){
            const arrayPosition = Math.floor(Math.random() * intervalNumbers.length);

            finalArray[i] = intervalNumbers[arrayPosition]
            intervalNumbers.splice(arrayPosition, 1)

        }
        numberOfDraw = numberOfDraw + 1;
        printResult(finalArray)
    }
    // se um unico número for sorteado
    else{
        let intervalNumbers = arrayIntervalNumbers();

        const arrayPosition = Math.floor(Math.random() * intervalNumbers.length);

        finalNumber = intervalNumbers[arrayPosition]
        intervalNumbers.splice(arrayPosition, 1)

        numberOfDraw = numberOfDraw + 1;
        printResult(finalNumber)
    }

}
