// declarando os botões D6 e D20
const dSixBtn = document.querySelector("#dsix_btn");
const dTwentyBtn = document.querySelector("#dtwenty_btn");

// chamando o div onde será impresso o dado
const diceBox = document.querySelector(".dice_box");

// variavel para verificar se o dado ja foi criado
let diceStatus = false;

// FUNÇÃO p/ Limpa os botões marcados e dados ja criados
function clearAll(){
    dSixBtn.classList.remove("selected_dice_option");
    dTwentyBtn.classList.remove("selected_dice_option");
    diceBox.innerHTML = ""
}

// FUNÇÃO p/ criar o dado na tela
function createDice(diceType){
    const diceCreate = document.createElement("img")
    diceCreate.classList.add("dice_img");
        if(diceType == 6){
            diceCreate.src = "../assets/dice/images/png/d6/d6_1.png"
        }
        else if(diceType == 20){
            diceCreate.src = "../assets/dice/images/png/d20/d20_1.png"
        }
    diceBox.appendChild(diceCreate);
    diceStatus = true;
}

// FUNÇÃO que recebe o numero tirado e retorna a imagem equivalente do dado
function diceRolling(diceType, num){
    if(diceType == 6){
        if(num == 1){
            return "../assets/dice/images/png/d6/d6_1.png"
        }
        else if(num == 2){
            return "../assets/dice/images/png/d6/d6_2.png"
        }
        else if(num == 3){
            return "../assets/dice/images/png/d6/d6_3.png"
        }
        else if(num == 4){
            return "../assets/dice/images/png/d6/d6_4.png"
        }
        else if(num == 5){
            return "../assets/dice/images/png/d6/d6_5.png"
        }
        else if(num == 6){
            return "../assets/dice/images/png/d6/d6_6.png"
        }
        else{
            alert("Erro")
        }
    }
    else if(diceType == 20){
        if(num == 1){
            return "../assets/dice/images/png/d20/d20_1.png"
        }
        else if(num == 2){
            return "../assets/dice/images/png/d20/d20_2.png"
        }
        else if(num == 3){
            return "../assets/dice/images/png/d20/d20_3.png"
        }
        else if(num == 4){
            return "../assets/dice/images/png/d20/d20_4.png"
        }
        else if(num == 5){
            return "../assets/dice/images/png/d20/d20_5.png"
        }
        else if(num == 6){
            return "../assets/dice/images/png/d20/d20_6.png"
        }
        else if(num == 7){
            return "../assets/dice/images/png/d20/d20_7.png"
        }
        else if(num == 8){
            return "../assets/dice/images/png/d20/d20_8.png"
        }
        else if(num == 9){
            return "../assets/dice/images/png/d20/d20_9.png"
        }
        else if(num == 10){
            return "../assets/dice/images/png/d20/d20_10.png"
        }
        else if(num == 11){
            return "../assets/dice/images/png/d20/d20_11.png"
        }
        else if(num == 12){
            return "../assets/dice/images/png/d20/d20_12.png"
        }
        else if(num == 13){
            return "../assets/dice/images/png/d20/d20_13.png"
        }
        else if(num == 14){
            return "../assets/dice/images/png/d20/d20_14.png"
        }
        else if(num == 15){
            return "../assets/dice/images/png/d20/d20_15.png"
        }
        else if(num == 16){
            return "../assets/dice/images/png/d20/d20_16.png"
        }
        else if(num == 17){
            return "../assets/dice/images/png/d20/d20_17.png"
        }
        else if(num == 18){
            return "../assets/dice/images/png/d20/d20_18.png"
        }
        else if(num == 19){
            return "../assets/dice/images/png/d20/d20_19.png"
        }
        else if(num == 20){
            return "../assets/dice/images/png/d20/d20_20.png"
        }
        else{
            alert("Erro")
        }
    }
}

// FUNÇÃO para imprimir o numero rolado
function diceRoll(diceType){
    
    const dicePrint = document.querySelector(".dice_img")

    if(diceType == 6){
        const num = Math.floor(Math.random() * (diceType - 1 + 1)) + 1;
        
        diceImage = diceRolling(diceType, num)
        dicePrint.src = diceImage;
    }
    else if(diceType == 20){
        const num = Math.floor(Math.random() * (diceType - 1 + 1)) + 1;
        
        diceImage = diceRolling(diceType, num)
        dicePrint.src = diceImage;
    }
}

// FUNÇÃO PARA INICIALIZAR O DADO
function dice(diceType){
    clearAll();
    
    if(diceType == 6){
        dSixBtn.classList.add("selected_dice_option");
    }else{
        dTwentyBtn.classList.add("selected_dice_option");
    }

    createDice(diceType)

    if(diceStatus){
        diceBox.addEventListener("click", function(){
            diceRoll(diceType)
        })
    }
}
