// trazendo a area de texto
const textContent = document.querySelector("#text_to_work");

// Trazendo botõees do menu principal
const menuBtns = document.querySelectorAll(".words_btn");
const wordsTransformBtb = document.getElementById("word_transform_btn");
const alphabeticOrdBtn = document.getElementById("alphabetic_ord_btn");
const characterCounterBtn = document.getElementById("character_counter_btn");

// Trazendo aplicações
const wordTransformApp = document.getElementById("word_transform_section");
const alphabeticOrdApp = document.getElementById("alphabetic_ord_section");
const characterCountApp = document.getElementById("character_counter_section");

// Menu Functions
// carrega Word Transform
function loadWordTransform(){
    clearMenuSelected();
    wordsTransformBtb.classList.add("selected_word_btn");
    wordTransformApp.style.display = "flex";
}

// carrega Alphabetic Order
function loadAlphabeticOrd(){
    clearMenuSelected();
    alphabeticOrdBtn.classList.add("selected_word_btn");
    alphabeticOrdApp.style.display = "flex";
}

// carrega Character Counter
function loadCharacterCount(){
    clearMenuSelected();
    characterCounterBtn.classList.add("selected_word_btn");
    characterCountApp.style.display = "flex";
    textContent.addEventListener("keypress", counterCharac)
    textContent.addEventListener("keyup", counterCharac)
}

// Limpar seleção do menu
function clearMenuSelected(){
    for(let i = 0; i < menuBtns.length; i++){
        menuBtns[i].classList.remove("selected_word_btn");
    }
    wordTransformApp.style.display = "none";
    alphabeticOrdApp.style.display = "none";
    characterCountApp.style.display = "none";
}

// -------------------- WORD TRANSFORM -----------------------
// Trazendo as opções de tranformação da palavra
const transformOptions = document.getElementsByName("word_transform_options");
const transformOptionsBtn = document.querySelectorAll(".radio_tranform_button");

// Variavel para atribuição da opção selecionada
let selectedTransformOption = "";

// FUNÇÃO DO WORD TRANFORM
function transformText(){
    // verificando qual opção foi selecionada
    for(let i = 0; i < transformOptions.length; i++){
        if (transformOptions[i].checked) {
            selectedTransformOption = transformOptions[i].value;
        }
    }

    // Opção MAIUSCULA
    if(selectedTransformOption == "uppercase_option"){
        const textToTransform = textContent.value;
        const textTransformed = textToTransform.toUpperCase();

        textContent.value = textTransformed;
    }// Opção MINUSCULA
    else if(selectedTransformOption == "lowercase_option"){
        const textToTransform = textContent.value;
        const textTransformed = textToTransform.toLowerCase();

        textContent.value = textTransformed;
    }// Opção ALTERNADO
    else if(selectedTransformOption == "alternate_option"){
        const textToTransform = textContent.value;
        let textTransformed = "";

        for (let i = 0; i < textToTransform.length; i++) {
            if(i % 2 == 0){
                textTransformed = textTransformed+textToTransform[i].toUpperCase();
            }
            else{
                textTransformed = textTransformed+textToTransform[i].toLowerCase();
            }
        }

        textContent.value = textTransformed        
    }// Opção TEXTO INVERTIDO
    else if(selectedTransformOption == "invert_option"){
        const textToTransform = textContent.value;
        let textTransformed = "";
        for (let i = textToTransform.length-1; i >= 0; i--) {
            textTransformed = textTransformed + textToTransform[i];
        }
        
        textContent.value = textTransformed;     
    }// Opção PRIMEIRA LETRA MAIUSCULA
    else if(selectedTransformOption == "first_letter_word_option"){
        const textToTransform = textContent.value;
        let textTransformed = "";
        
        let separatedWordsToTransform = textToTransform.split(" ")
        for(let i = 0; i < separatedWordsToTransform.length; i++){
            const firstLetterOfWord = separatedWordsToTransform[i][0].toUpperCase();
            let remainingWord = ""
                for(let j = 1; j < separatedWordsToTransform[i].length; j++){
                    remainingWord = remainingWord + separatedWordsToTransform[i][j].toLowerCase();
                }
            separatedWordsToTransform[i] = firstLetterOfWord + remainingWord
        }
        textTransformed = separatedWordsToTransform.join(" ")
        textContent.value = textTransformed;
    }

}

// -------------------- ALPHABETIC ORDER -----------------------

// Trazendo as opções para ordernar as palavras
const alphabOrdenationOptions = document.getElementsByName("ordenation_alphab_ord_options")
const alphabOrderByOptions = document.getElementsByName("order_by_alphab_ord_options")
const returnOrderByOptions = document.getElementsByName("return_by_alphab_ord_options")
const repeatWordsOption = document.querySelector("#remove_repeat_alphab_ord")

// Variaveis para atribuição das opções selecionadas
let selectedOrdenationOptions = ""
let selectedOrderByOptions = ""
let selectedReturnByOptions = ""

// FUNÇÃO DO ALPHABETIC ORDER
function orderAlphabetic(){

    //função para limpar itens repitidos
    function repeatWords(wordsArray){
    
        const cleanedRepeatList = new Set();

        wordsArray.forEach((word) => {
            cleanedRepeatList.add(word);
        });

        return cleanedRepeatList
    }

    // Atribuindo a opção checkada em Ordenação Crescente/Decrescente a variavel de seleção
    for(let i = 0; i < alphabOrdenationOptions.length; i++){
        if (alphabOrdenationOptions[i].checked) {
            selectedOrdenationOptions = alphabOrdenationOptions[i].value;
        }
    }
    // Atribuindo a opção checkada em Separar por: a variavel de seleção
    for(let i = 0; i < alphabOrderByOptions.length; i++){
        if (alphabOrderByOptions[i].checked) {
            selectedOrderByOptions = alphabOrderByOptions[i].value;
        }
    }
    // Atribuindo a opção checkada em Retornar por: a variavel de seleção
    for(let i = 0; i < returnOrderByOptions.length; i++){
        if (returnOrderByOptions[i].checked) {
            selectedReturnByOptions = returnOrderByOptions[i].value;
        }
    }

    // Recebendo o conteudo do texto
    const textToOrder = textContent.value;

    // função que realiza Ordenação
    function orderAlphabStart(splitSymbol,splitSymbolAfter){
        // Splita o texto para um array
        let splitedWords = textToOrder.split(splitSymbol);
        
        // Coloca em ordem alfabetica
        splitedWords = splitedWords.sort(function (a, b){
            let x = a.toUpperCase(),
                y = b.toUpperCase();
            
            return x == y ? 0 : x > y ? 1 : -1;
        })

        // Caso Opção Z - A
        if(selectedOrdenationOptions == "z_to_a_ord" ){
            let reverseWords = []
                for(let i = splitedWords.length-1; i > -1; i--){
                    reverseWords.push(splitedWords[i])
                }
                
                // check se remove repeat ta marcado
                if(repeatWordsOption.checked){
                    const cleanedWordsTemp = repeatWords(reverseWords)
                    reverseWords = [...cleanedWordsTemp.values()]
                }

                const textTransformed = reverseWords.join(splitSymbolAfter)
                textContent.value = textTransformed;
        }
        // caso Opção A - Z (continua)
        else if(selectedOrdenationOptions == "a_to_z_ord"){

            // check se remove repeat ta marcado
            if(repeatWordsOption.checked){
                const cleanedWordsTemp = repeatWords(splitedWords)
                splitedWords = [...cleanedWordsTemp.values()]
            }
        
        // Remonta a string pelo Array
        const textTransformed = splitedWords.join(splitSymbolAfter)
        // Atribui ao textArea
        textContent.value = textTransformed;
        }
    }

    //função para definir como a separação das palavras seram retornadas
    function returnOrderSelected(){
        // Opção retorna com QUEBRA DE LINHA
        if(selectedReturnByOptions == "return_word_wrap_alphab_ord"){
            const splitSymbolAfter = "\n";
            return splitSymbolAfter;
        }
        // Opção retorna com ESPAÇO
        else if(selectedReturnByOptions == "return_space_alphab_ord"){
            const splitSymbolAfter = " "
            return splitSymbolAfter;
        }
        // Opção retorna com VIRGULA
        else if(selectedReturnByOptions == "return_comma_alphab_ord"){
            const splitSymbolAfter = ","
            return splitSymbolAfter;
        }
        // Opção retorna com PONTO E VIRGULA
        else if(selectedReturnByOptions == "return_semicolon_alphab_ord"){
            const splitSymbolAfter = ";"
            return splitSymbolAfter;
        }
        // Opção retorna com PONTO
        else if(selectedOrderByOptions == "return_dot_alphab_ord"){
            const splitSymbolAfter = "."
            return splitSymbolAfter;
        }
    }

    // Opção QUEBRA DE LINHA
    if(selectedOrderByOptions == "word_wrap_alphab_ord"){
        const splitSymbol = /\r?\n/
        const splitSymbolAfter = returnOrderSelected()
        orderAlphabStart(splitSymbol,splitSymbolAfter)
    }
    // Opção ESPAÇO
    else if(selectedOrderByOptions == "space_alphab_ord"){
        const splitSymbol = " "
        const splitSymbolAfter = returnOrderSelected()
        orderAlphabStart(splitSymbol,splitSymbolAfter)
    }
    // Opção VIRGULA
    else if(selectedOrderByOptions == "comma_alphab_ord"){
        const splitSymbol = ","
        const splitSymbolAfter = returnOrderSelected()
        orderAlphabStart(splitSymbol,splitSymbolAfter)
    }
    // Opção PONTO E VIRGULA
    else if(selectedOrderByOptions == "semicolon_alphab_ord"){
        const splitSymbol = ";"
        const splitSymbolAfter = returnOrderSelected()
        orderAlphabStart(splitSymbol,splitSymbolAfter)
    }
    // Opção PONTO
    else if(selectedOrderByOptions == "dot_alphab_ord"){
        const splitSymbol = "."
        const splitSymbolAfter = returnOrderSelected()
        orderAlphabStart(splitSymbol,splitSymbolAfter)
    }
        
}   

// -------------------- CHARACTER CONUNTER -----------------------

// função de CONTADOR
function counterCharac(e){

    // DOM ELEMENTS representa os numeros dos contadores
    let characterQty = document.getElementById("character_text"); //contador caracteres
    let wordsQty = document.getElementById("words_text"); //contador de palavras
    let rowsQty = document.getElementById("rows_text"); // contador de linhas

    // atribuindo conteudo do textarea a variavel
    const currentText = textContent.value;

    // imprime contador de caracteres
    characterQty.innerHTML = currentText.length;

    // atribuindo cada palavra em um array
    const wordsCurrentText = currentText.split(/\s/);
    // imprime o contador de palavras
    wordsQty.innerHTML = wordsCurrentText.length;

    // atribuindo cada linha em um array
    const rowsCurrentText = currentText.split(/\r?\n/);
    // imprime contador de linhas
    rowsQty.innerHTML = rowsCurrentText.length;
}
