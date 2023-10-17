// DOM ELEMENTS - SECTIONS
const secretWordSection = document.querySelector(".hangman_secret_word_section");
const hangmanSection = document.querySelector(".hangman_game_section");
const hangmanKeyboardSection = document.querySelector(".hangman_keyboard_section");

// DOM ELEMENTS - SECRET WORD SECTION
const secretWordInput = document.querySelector(".secret_word_input");
const startGameBtn = document.querySelector(".hangman_start_btn");
const wordBox = document.querySelector(".hangman_word_box")

// DOM ELEMENTS - GALLOW IMG
const gallowImg = document.querySelector("#hangman_gallow_img")

// DOM ELEMENTS - KEYS
const keyboardKeys = document.querySelectorAll(".hangman_letter")

// Variavel array que ira receber letras já usadas
let usedLetters = [];
// Variavel conta o numero de letras da palavra secreta
let contTotalLetters = 0;
// Variavel conta o numero de letras acertadas
let contRightLetters = 0;
// Variavel conta o numero de letras erradas
let contWrongLetters = 0;

// FUNÇÃO PARA CHECKAR A LETRA
function checkLetter(letter, secretWord){
    
    let arraySecretWord = []

    for(let i = 0; i < secretWord.length; i++){
        arraySecretWord.push(secretWord[i])
    }

    if(arraySecretWord.includes(letter)){
        for(let j = 0; j < arraySecretWord.length; j++){
            if(letter == secretWord[j]){
                const secretLetters = document.querySelectorAll(".hangman_secret_letter");
                secretLetters[j].textContent = letter;
                secretLetters[j].classList.add("correct_letter");
                contRightLetters = contRightLetters + 1;
            }
        }
        return true;
    }
    else{
        contWrongLetters = contWrongLetters + 1
        if(contWrongLetters == 1){
            gallowImg.src = "../assets/hangman/images/png/hangman_body/01_head.png";
        }
        else if(contWrongLetters == 2){
            gallowImg.src = "../assets/hangman/images/png/hangman_body/02_body.png";
        }
        else if(contWrongLetters == 3){
            gallowImg.src = "../assets/hangman/images/png/hangman_body/03_leg_r.png";
        }
        else if(contWrongLetters == 4){
            gallowImg.src = "../assets/hangman/images/png/hangman_body/04_leg_l.png";
        }
        else if(contWrongLetters == 5){
            gallowImg.src = "../assets/hangman/images/png/hangman_body/05_arm_r.png";
        }
        else if(contWrongLetters == 6){
            gallowImg.src = "../assets/hangman/images/png/hangman_body/06_arm_l.png";
        }
        else if(contWrongLetters == 7){
            gallowImg.src = "../assets/hangman/images/png/hangman_body/07_rope.png";
        }
        else if(contWrongLetters == 8){
            gallowImg.src = "../assets/hangman/images/png/hangman_body/08_dead.png";
        }

        return false;
    }

}

// FUNÇÃO PARA TROCAR A COR DA LETRA CLICADA
function changeKeyColor(clickedKey, letterChecked){
    if(letterChecked){
        clickedKey.classList.add("correct_letter_key");
    }else{
        clickedKey.classList.add("wrong_letter_key");
    }
}

// FUNÇÃO PARA CHECKARVITORIA
function checkResult(){
    if(contRightLetters == contTotalLetters){
        gallowImg.src = "../assets/hangman/images/png/hangman_body/09_win.png";
        alert("vitoria!");
    }
    else if(contWrongLetters == 8){
        alert("derrotado");
    }
}

// FUNÇÃO PARA INICIAR GAME
function startGame(){

    // Desativando vizualização do input da palavra-chave, apresentando a forca e o teclado
    secretWordSection.style.display = "none";
    hangmanSection.style.display = "flex";
    hangmanKeyboardSection.style.display = "flex";

    //Atribuindo a palavra secreta a variavel
    let secretWord = secretWordInput.value;
    //Atribuindo a quantidade de letras
    contTotalLetters = secretWord.length
    
    // Criação das letras da palavra
    for(let i = 0; i < secretWord.length; i++){
        const secretLetter = document.createElement("div");
        secretLetter.classList.add("hangman_secret_letter");
        wordBox.appendChild(secretLetter)
        secretLetter.textContent = "*"
    }

    // evento de clique no teclado virtual
    
    keyboardKeys.forEach(keysK => {
        keysK.addEventListener("click", function(e){
            let clickedLetter = e.target.textContent;
            let clickedKey = e.target;
            if(usedLetters.includes(clickedLetter)){
                alert("Letra já escolhida, escolha outra letra")
            }else{
                usedLetters.push(clickedLetter)
                let letterChecked = checkLetter(clickedLetter, secretWord);
                changeKeyColor(clickedKey, letterChecked);
                checkResult();
            }
        })
    })
}

