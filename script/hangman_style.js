// DOM ELEMENTS - SECTIONS
const secretWordSection = document.querySelector(".hangman_secret_word_section");
const hangmanSection = document.querySelector(".hangman_game_section");
const hangmanKeyboardSection = document.querySelector(".hangman_keyboard_section");
const modalSection = document.querySelector(".modal_result_section");

// DOM ELEMENTS - SECRET WORD SECTION
const secretWordInput = document.querySelector(".secret_word_input");
const startGameBtn = document.querySelector("#hangman_start_btn");
const wordBox = document.querySelector(".hangman_word_box");

// DOM ELEMENTS - GALLOW IMG
const gallowImg = document.querySelector("#hangman_gallow_img");

// DOM ELEMENTS - KEYS
const keyboardKeys = document.querySelectorAll(".hangman_letter");

// DOM ELEMENTS - MODAL RESULT
const resultText = document.querySelector("#result_text");
const resultBtn = document.querySelector("#close_modal_result");

// Variavel array que ira receber letras já usadas
let usedLetters = [];
// Variavel conta o numero de letras da palavra secreta
let contTotalLetters = 0;
// Variavel conta o numero de letras acertadas
let contRightLetters = 0;
// Variavel conta o numero de letras erradas
let contWrongLetters = 0;
// Variavel para validar se o jogo já começou
let gameStarted = false;
// Variavel para validar se o jogo ta rodando
let gameRunning = false;
// Variavel da palavra secreta
let secretWord = ""

// FUNÇÃO PARA CHECKAR A LETRA
function checkLetter(letter, secretWord){
    // Adiciono letra ao Array de letras usadas
    usedLetters.push(letter);
    // Array para receber cada caracter da palabra chave
    let arraySecretWord = []
    // Atribuindo caracteres da palavra chave ao array
    for(let i = 0; i < secretWord.length; i++){
        arraySecretWord.push(secretWord[i])
    }
    // Imprimindo letra correta na tela
    if(arraySecretWord.includes(letter)){
        for(let j = 0; j < arraySecretWord.length; j++){
            if(letter == secretWord[j]){
                const secretLetters = document.querySelectorAll(".hangman_secret_letter");
                secretLetters[j].textContent = letter;
                secretLetters[j].classList.add("correct_letter");
                contRightLetters = contRightLetters + 1;
            }
        }
        // Retorna que letra escolhida esta certa
        return true;
    }
    else{ // Contador de Erros - Imagens da forca
        contWrongLetters = contWrongLetters + 1
        if(contWrongLetters == 1){
            gallowImg.src = "assets/hangman/images/png/hangman_body/01_head.png";
        }
        else if(contWrongLetters == 2){
            gallowImg.src = "assets/hangman/images/png/hangman_body/02_body.png";
        }
        else if(contWrongLetters == 3){
            gallowImg.src = "assets/hangman/images/png/hangman_body/03_leg_r.png";
        }
        else if(contWrongLetters == 4){
            gallowImg.src = "assets/hangman/images/png/hangman_body/04_leg_l.png";
        }
        else if(contWrongLetters == 5){
            gallowImg.src = "assets/hangman/images/png/hangman_body/05_arm_r.png";
        }
        else if(contWrongLetters == 6){
            gallowImg.src = "assets/hangman/images/png/hangman_body/06_arm_l.png";
        }
        else if(contWrongLetters == 7){
            gallowImg.src = "assets/hangman/images/png/hangman_body/07_rope.png";
        }
        else if(contWrongLetters == 8){
            gallowImg.src = "assets/hangman/images/png/hangman_body/08_dead.png";
        }
        // Retorna que letra escolhida esta errada
        return false;
    }

}

// FUNÇÃO PARA TROCAR A COR DA LETRA CLICADA
function changeKeyColor(clickedKey, letterChecked){
    if(letterChecked){
        clickedKey.classList.add("correct_letter_key"); // Letra correta, classe css p/ letras do teclado corretos
    }else{
        clickedKey.classList.add("wrong_letter_key"); // Letra errada, classe css p/ letras do teclado erradas
    }
}

// FUNÇÃO PARA CHECKAR VITORIA
function checkResult(){
    if(contRightLetters == contTotalLetters){ // caso vença
        gameRunning = false
        gallowImg.src = "assets/hangman/images/png/hangman_body/09_win.png";
        modalSection.style.display = "flex"
        resultText.textContent = "você venceu!"
    }
    else if(contWrongLetters == 8){ // caso perca
        gameRunning = false
        modalSection.style.display = "flex"
        resultText.textContent = "você perdeu!"
    }
}

// FUNÇÃO PARA CHECKAR SE A LETRA JA FOI CLICADA OU NÃO
function checkClickedLetter(clickedLetter, clickedKey){
    if(usedLetters.includes(clickedLetter)){
        alert("Letra já escolhida, escolha outra letra")
    }else{
        gameStarted = true;
        let letterChecked = checkLetter(clickedLetter, secretWord);
        console.log(secretWord)
        changeKeyColor(clickedKey, letterChecked);
        checkResult();
    }
}

// FUNÇÃO PARA INICIAR GAME
function startGame(){

    // Verificar se a palavra secreta é valida
    if(secretWordInput.value.match(/^[a-zA-Z]+$/)){
         // Desativando vizualização do input da palavra-chave, apresentando a forca e o teclado
        secretWordSection.style.display = "none";
        hangmanSection.style.display = "flex";
        hangmanKeyboardSection.style.display = "flex";

        //Atribuindo a palavra secreta a variavel
        secretWord = secretWordInput.value;
        //Atribuindo a quantidade de letras
        contTotalLetters = secretWord.length
        
        // Criação das letras da palavra
        for(let i = 0; i < secretWord.length; i++){
            const secretLetter = document.createElement("div");
            secretLetter.classList.add("hangman_secret_letter");
            wordBox.appendChild(secretLetter)
            secretLetter.textContent = "*"
        }
        
        // Jogo Rodando
        gameRunning = true

        // Verifica se jogo já inicio
        if(gameStarted == false){
            // Chama função de digitação no teclado fisico
            phisicalKeyboard();
            // Evento de clique no teclado virtual
            keyboardKeys.forEach(keysK => {
                keysK.addEventListener("click", function listenKey(e){
                        let clickedLetter = e.target.textContent;
                        let clickedKey = e.target;

                        checkClickedLetter(clickedLetter, clickedKey);
                })
            })
        }
    }
    else{ // Caso palavra chave invalida
        alert("Palavra Invalida! Favor, digitar palavra secreta valida.")
    }
}

// FUNÇÃO PARA DIGITAR LETRAS SECRETAS PELO TECLADO FISICO
function phisicalKeyboard(){
    document.addEventListener("keyup", function phisicalKey(e){
        if(gameRunning){
            if(e.which >= 65 && e.which <= 90){ // Caso a tecla apertada for de A a Z
                let clickedLetter = e.key
                let clickedKey
                
                for(let i = 0; i < keyboardKeys.length; i++){
                    if(clickedLetter == keyboardKeys[i].textContent){
                        clickedKey = keyboardKeys[i];
                    }
                }

                checkClickedLetter(clickedLetter, clickedKey);
            }
            else{ // Caso a tecla apertada não for de A a Z
                alert("Favor, teclar letra valida.")
            }
        }
    })
}

// FUNÇÃO PARA RESETAR TODAS AS VARIAVEIS E REINICIAR O JOGO DO PONTO DE INICIO
function resetGame(){
    console.log(usedLetters)
    modalSection.style.display = "none"
    gallowImg.src = "assets/hangman/images/png/gallow.png";
    
    // FOR PARA LIMPAR A COLORAÇÃO DO TECLADO VIRTUAL
    for(let i = 0; i < usedLetters.length; i++){
        for(let j = 0; j < keyboardKeys.length; j++){
            if(usedLetters[i] == keyboardKeys[j].textContent){
                if(keyboardKeys[j].classList.contains("correct_letter_key")){
                    keyboardKeys[j].classList.remove("correct_letter_key")
                }
                else if(keyboardKeys[j].classList.contains("wrong_letter_key")){
                    keyboardKeys[j].classList.remove("wrong_letter_key")
                }
            }
        }
    }
    
    // Limpando variaveis
    usedLetters = [];
    contTotalLetters = 0;
    contRightLetters = 0;
    contWrongLetters = 0;

    // LIMPAR O CAMPO DE PALAVRA SECRETA
    const  secretWordLetters = document.querySelectorAll(".hangman_secret_letter ")

    // Remove as casas de letras secretas
    for(let i = secretWordLetters.length - 1; i >= 0; i--){
        secretWordLetters[i].remove();
    }

    // Limpando o input de palavra-chave
    secretWordInput.value = ""

    // Desativando vizualização da forca e do teclado e apresentando do input da palavra chave novamente
    hangmanSection.style.display = "none";
    hangmanKeyboardSection.style.display = "none";
    secretWordSection.style.display = "flex";
}

