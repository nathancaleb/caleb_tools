// trazendo a area de texto
const textContent = document.querySelector("#text_to_work");

// Trazendo botõees do menu principal
const menuBtns = document.querySelectorAll(".words_btn")
const wordsTransformBtb = document.getElementById("word_transform_btn");
const alphabeticOrdBtn = document.getElementById("alphabetic_ord_btn");

// Trazendo aplicações
const wordTransformApp = document.getElementById("word_transform_section");
const alphabeticOrdApp = document.getElementById("alphabetic_ord_section")

// Menu Functions
function loadWordTransform(){
    clearMenuSelected()
    wordsTransformBtb.classList.add("selected_word_btn");
    wordTransformApp.style.display = "flex"
}

function loadAlphabeticOrd(){
    clearMenuSelected()
    alphabeticOrdBtn.classList.add("selected_word_btn")
    alphabeticOrdApp.style.display = "flex"
}

// Limpar seleção do menu
function clearMenuSelected(){
    for(let i = 0; i < menuBtns.length; i++){
        menuBtns[i].classList.remove("selected_word_btn")
    }
    wordTransformApp.style.display = "none"
    alphabeticOrdApp.style.display = "none"
}

// -------------------- WORD TRANSFORM -----------------------
// Trazendo as opções de tranformação da palavra
const transformOptions = document.getElementsByName("word_transform_options");
const transformOptionsBtn = document.querySelectorAll(".radio_tranform_button")

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
const repeatWordsOption = document.querySelector("#remove_repeat_alphab_ord")

// Variaveis para atribuição das opções selecionadas
let selectedOrdenationOptions = ""
let selectedOrderByOptions = ""

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

    // Atribuindo a opção checkada a variavel de seleção
    for(let i = 0; i < alphabOrdenationOptions.length; i++){
        if (alphabOrdenationOptions[i].checked) {
            selectedOrdenationOptions = alphabOrdenationOptions[i].value;
        }
    }
    // Atribuindo a opção checkada a variavel de seleção
    for(let i = 0; i < alphabOrderByOptions.length; i++){
        if (alphabOrderByOptions[i].checked) {
            selectedOrderByOptions = alphabOrderByOptions[i].value;
        }
    }

    // Recebendo o conteudo do texto
    const textToTransform = textContent.value;

    // Opção QUEBRA DE LINHA
    if(selectedOrderByOptions == "word_wrap_alphab_ord"){
        
        // Splita por espaço
        let splitedWords = textToTransform.split(/\r?\n/);
        
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

                const textTransformed = reverseWords.join("\n")
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
        const textTransformed = splitedWords.join("\n")
        // Atribui ao textArea
        textContent.value = textTransformed;
        }
    }    
}
