// trazendo a area de texto
const textContent = document.querySelector("#text_to_work");

// -------------------- WORD TRANSFORM -----------------------
// Trazendo as opções de tranformação da palavra
const transformOptions = document.getElementsByName("word_transform_options");

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

    if(selectedTransformOption == "uppercase_option"){
        const textToTransform = textContent.value;
        const textTransformed = textToTransform.toUpperCase();

        textContent.value = textTransformed;
    }
    else if(selectedTransformOption == "lowercase_option"){
        const textToTransform = textContent.value;
        const textTransformed = textToTransform.toLowerCase();

        textContent.value = textTransformed;
    }
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
    }
    else if(selectedTransformOption == "invert_option"){
        const textToTransform = textContent.value;
        let textTransformed = "";
        for (let i = textToTransform.length-1; i >= 0; i--) {
            textTransformed = textTransformed + textToTransform[i];
        }
        
        textContent.value = textTransformed;     
    }
    else if(selectedTransformOption == "first_letter_word_option"){
        const textToTransform = textContent.value;
        let textTransformed = "";
        
        let separatedWordsToTransform = textToTransform.split(" ")
        for(let i = 0; i < separatedWordsToTransform.length; i++){
            const firstLetterOfWord = separatedWordsToTransform[i][0].toUpperCase();
                let word = ""
                    if(word == ""){
                        word = word + firstLetterOfWord
                    }
                    else{
                        word = word + separatedWordsToTransform[i]
                    }console.log(word)
                }
    }

        //textContent.value = textTransformed        
}