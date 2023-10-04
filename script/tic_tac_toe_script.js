// Trazendo o simbolo do jogador
const p1Symbol = document.querySelector("#p1_img_symbol");
const p2Symbol = document.querySelector("#p2_img_symbol");

// Trazendo o menu de simbolos
const p1ToSelectSymbol = document.querySelector("#p1_option_symbol");
const p2ToSelectSymbol = document.querySelector("#p2_option_symbol");

// Trazendo DOM ELEMENT das pontuações
const p1ScoreText = document.querySelector("#p1_score");
const p2ScoreText = document.querySelector("#p2_score");

// Trazendo todas as possições do tabuleiro
const position1 = document.querySelector("#ttt_space_1 img");
const position2 = document.querySelector("#ttt_space_2 img");
const position3 = document.querySelector("#ttt_space_3 img");
const position4 = document.querySelector("#ttt_space_4 img");
const position5 = document.querySelector("#ttt_space_5 img");
const position6 = document.querySelector("#ttt_space_6 img");
const position7 = document.querySelector("#ttt_space_7 img");
const position8 = document.querySelector("#ttt_space_8 img");
const position9 = document.querySelector("#ttt_space_9 img");

// Trazendo modal de vencedor
const victoryModal = document.querySelector(".ttt_victory_modal")
const victoryModalBox = document.querySelector(".ttt_victory_box")

// Variavel para verificar inicialização da partida
let playStart = false;
// Variavel para definir o jogador que deseja mudar de icone
let playerToChange = 0
// Variavel para definir o jogador atual
let currentPlayer = 1
// Variaveis que definem o simbolo determinado
let p1SymbolSelected = "x"
let p2SymbolSelected = "o"
// Variavel para definir se o jogo finalizou
let gameFinal = false
// Variavel Matriz para marcar cada jogada e interação para definir vencedor
const board = new Array(3)
board[0] = new Array(3) // linha 1
board[1] = new Array(3) // linha 2
board[2] = new Array(3) // linha 3
// Variaveis com o caminho dos simbolos
const xSymbol = "../assets/tic_tac_toe/images/svg/x_img.svg";
const oSymbol = "../assets/tic_tac_toe/images/svg/o_img.svg";
// Variavel Array com os espaços já clicados
let checkIsClicked = [];
// Variaveis de pontuação
let p1Score = 0;
let p2Score = 0;

// FUNÇÃO PARA MUDAR SIMBOLO DO JOGADOR
function menuChangeSymbol(player){

    playerToChange = player;

    if(playStart == false){
        if(player == 1){
            p1ToSelectSymbol.style.display = "flex";
        }
        if(player == 2){
            p2ToSelectSymbol.style.display = "flex";
        }
    }
    else if(playStart == true){
        alert("A partida já iniciou, não é possivel trocar o simbolo até o final do jogo.");
    }
}

function changeSymbol(symbol){
    if(symbol == 'x'){
        if(playerToChange == 1){
            p1Symbol.src = "../assets/tic_tac_toe/images/svg/x_img.svg";
            p2Symbol.src = "../assets/tic_tac_toe/images/svg/o_img.svg";
            p1ToSelectSymbol.style.display = "none";
            p1SymbolSelected = "x"
            p2SymbolSelected = "o"
        }
        else if(playerToChange == 2){
            p2Symbol.src = "../assets/tic_tac_toe/images/svg/x_img.svg";
            p1Symbol.src = "../assets/tic_tac_toe/images/svg/o_img.svg";
            p2ToSelectSymbol.style.display = "none";
            p1SymbolSelected = "o"
            p2SymbolSelected = "x"
        }
    }
    else if(symbol == 'o'){
        if(playerToChange == 1){
            p1Symbol.src = "../assets/tic_tac_toe/images/svg/o_img.svg";
            p2Symbol.src = "../assets/tic_tac_toe/images/svg/x_img.svg";
            p1ToSelectSymbol.style.display = "none";
            p1SymbolSelected = "o"
            p2SymbolSelected = "x"
        }
        else if(playerToChange == 2){
            p2Symbol.src = "../assets/tic_tac_toe/images/svg/o_img.svg";
            p1Symbol.src = "../assets/tic_tac_toe/images/svg/x_img.svg";
            p2ToSelectSymbol.style.display = "none";
            p1SymbolSelected = "x"
            p2SymbolSelected = "o"
        }
    }
}

function changePlayer(){
    const yourTurnText = document.querySelectorAll(".ttt_player_text");
    const playerBox = document.querySelectorAll(".ttt_player_icon");

    if(currentPlayer == 1){
        yourTurnText[0].style.display = "flex"
        yourTurnText[0].classList.add("player_selected")
        playerBox[0].classList.add("player_selected")

        yourTurnText[1].style.display = "none"
        yourTurnText[1].classList.remove("player_selected")
        playerBox[1].classList.remove("player_selected")
    }
    else if(currentPlayer == 2){
        yourTurnText[1].style.display = "flex"
        yourTurnText[1].classList.add("player_selected")
        playerBox[1].classList.add("player_selected")

        yourTurnText[0].style.display = "none"
        yourTurnText[0].classList.remove("player_selected")
        playerBox[0].classList.remove("player_selected")
    }
}

function winner(currentPlayer){
    if(currentPlayer == 1){
        p1Score = p1Score + 1;
        
        const modalText = document.createElement("span");
        const winnerText = document.createTextNode("VENCEDOR - PLAYER 1");
        
        modalText.classList.add("modal_text")
        modalText.appendChild(winnerText);
        victoryModalBox.appendChild(modalText);

        p1ScoreText.innerHTML = p1Score;

        victoryModal.style.display = "flex";

        checkModal();
    }
    else if(currentPlayer == 2){
        p2Score = p2Score + 1;

        const modalText = document.createElement("span");
        const winnerText = document.createTextNode("VENCEDOR - PLAYER 2");
        
        modalText.classList.add("modal_text")
        modalText.appendChild(winnerText);
        victoryModalBox.appendChild(modalText);

        p2ScoreText.innerHTML = p2Score;

        victoryModal.style.display = "flex";

        checkModal();
    }
    gameFinal = true;
}

function checkVictory(boxClicked, currentPlayer){
    
    if(boxClicked == 1){
        board[0][0] = currentPlayer;
    }
    else if(boxClicked == 2){
        board[0][1] = currentPlayer;
    }
    else if(boxClicked == 3){
        board[0][2] = currentPlayer;
    }
    else if(boxClicked == 4){
        board[1][0] = currentPlayer;
    }
    else if(boxClicked == 5){
        board[1][1] = currentPlayer;
    }
    else if(boxClicked == 6){
        board[1][2] = currentPlayer;
    }
    else if(boxClicked == 7){
        board[2][0] = currentPlayer;
    }
    else if(boxClicked == 8){
        board[2][1] = currentPlayer;
    }
    else if(boxClicked == 9){
        board[2][2] = currentPlayer;
    }

    if(board[0][0] == board[0][1] && board[0][0] == board[0][2]){
        winner(currentPlayer);
    }
    else if(board[1][0] == board[1][1] && board[1][0] == board[1][2]){
        winner(currentPlayer);
    }
    else if(board[2][0] == board[2][1] && board[2][0] == board[2][2]){
        winner(currentPlayer);
    }
    else if(board[0][0] == board[1][0] && board[0][0] == board[2][0]){
        winner(currentPlayer);
    }
    else if(board[0][1] == board[1][1] && board[0][1] == board[2][1]){
        winner(currentPlayer);
    }
    else if(board[0][2] == board[1][2] && board[0][2] == board[2][2]){
        winner(currentPlayer);
    }
    else if(board[0][0] == board[1][1] && board[0][0] == board[2][2]){
        winner(currentPlayer);
    }
    else if(board[0][2] == board[1][1] && board[0][2] == board[2][0]){
        winner(currentPlayer);
    }
    else{
        console.log("continue")
    }
}

function playGame(boxClicked){
    
    // inicializando o game
    if(playStart == false){
        
        let x = 10;

        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                board[i][j] = x
                x = x+1;
            }
        }
        
        playStart = true;
    }

    if(checkIsClicked.includes(boxClicked) == false){

        checkIsClicked.push(boxClicked);
        // imprimir simbolo na tela
        if(currentPlayer == 1){        
            if(boxClicked == 1){
                if(p1SymbolSelected == "x"){
                    position1.src = xSymbol;
                }
                else if(p1SymbolSelected == "o"){
                    position1.src = oSymbol;
                }
            }
            else if(boxClicked == 2){
                if(p1SymbolSelected == "x"){
                    position2.src = xSymbol;
                }
                else if(p1SymbolSelected == "o"){
                    position2.src = oSymbol;
                }
            }
            else if(boxClicked == 3){
                if(p1SymbolSelected == "x"){
                    position3.src = xSymbol;
                }
                else if(p1SymbolSelected == "o"){
                    position3.src = oSymbol;
                }
            }
            else if(boxClicked == 4){
                if(p1SymbolSelected == "x"){
                    position4.src = xSymbol;
                }
                else if(p1SymbolSelected == "o"){
                    position4.src = oSymbol;
                }
            }
            else if(boxClicked == 5){
                if(p1SymbolSelected == "x"){
                    position5.src = xSymbol;
                }
                else if(p1SymbolSelected == "o"){
                    position5.src = oSymbol;
                }
            }
            else if(boxClicked == 6){
                if(p1SymbolSelected == "x"){
                    position6.src = xSymbol;
                }
                else if(p1SymbolSelected == "o"){
                    position6.src = oSymbol;
                }
            }
            else if(boxClicked == 7){
                if(p1SymbolSelected == "x"){
                    position7.src = xSymbol;
                }
                else if(p1SymbolSelected == "o"){
                    position7.src = oSymbol;
                }
            }
            else if(boxClicked == 8){
                if(p1SymbolSelected == "x"){
                    position8.src = xSymbol;
                }
                else if(p1SymbolSelected == "o"){
                    position8.src = oSymbol;
                }
            }
            else if(boxClicked == 9){
                if(p1SymbolSelected == "x"){
                    position9.src = xSymbol;
                }
                else if(p1SymbolSelected == "o"){
                    position9.src = oSymbol;
                }
            }
        }
        else if(currentPlayer == 2){        
            if(boxClicked == 1){
                if(p2SymbolSelected == "x"){
                    position1.src = xSymbol;
                }
                else if(p2SymbolSelected == "o"){
                    position1.src = oSymbol;
                }
            }
            else if(boxClicked == 2){
                if(p2SymbolSelected == "x"){
                    position2.src = xSymbol;
                }
                else if(p2SymbolSelected == "o"){
                    position2.src = oSymbol;
                }
            }
            else if(boxClicked == 3){
                if(p2SymbolSelected == "x"){
                    position3.src = xSymbol;
                }
                else if(p2SymbolSelected == "o"){
                    position3.src = oSymbol;
                }
            }
            else if(boxClicked == 4){
                if(p2SymbolSelected == "x"){
                    position4.src = xSymbol;
                }
                else if(p2SymbolSelected == "o"){
                    position4.src = oSymbol;
                }
            }
            else if(boxClicked == 5){
                if(p2SymbolSelected == "x"){
                    position5.src = xSymbol;
                }
                else if(p2SymbolSelected == "o"){
                    position5.src = oSymbol;
                }
            }
            else if(boxClicked == 6){
                if(p2SymbolSelected == "x"){
                    position6.src = xSymbol;
                }
                else if(p2SymbolSelected == "o"){
                    position6.src = oSymbol;
                }
            }
            else if(boxClicked == 7){
                if(p2SymbolSelected == "x"){
                    position7.src = xSymbol;
                }
                else if(p2SymbolSelected == "o"){
                    position7.src = oSymbol;
                }
            }
            else if(boxClicked == 8){
                if(p2SymbolSelected == "x"){
                    position8.src = xSymbol;
                }
                else if(p2SymbolSelected == "o"){
                    position8.src = oSymbol;
                }
            }
            else if(boxClicked == 9){
                if(p2SymbolSelected == "x"){
                    position9.src = xSymbol;
                }
                else if(p2SymbolSelected == "o"){
                    position9.src = oSymbol;
                }
            }
        }

        // função para verificar se alguem venceu
        checkVictory(boxClicked, currentPlayer);

        // trocar o jogador
        if(currentPlayer == 1){
            currentPlayer = 2
        }else if(currentPlayer == 2){
            currentPlayer = 1
        }

        //trocando jogador
        changePlayer();
    }
    else{
        alert("Espaço ocupado. Favor, selecionar outro espaço.")
    }
}

changePlayer();

function resetAll(){
    playStart = false;
    playerToChange = 0;
    currentPlayer = 1;
    p1SymbolSelected = "x";
    p2SymbolSelected = "o";
    checkIsClicked = [];
    changePlayer();
    position1.src = "#";
    position2.src = "#";
    position3.src = "#";
    position4.src = "#";
    position5.src = "#";
    position6.src = "#";
    position7.src = "#";
    position8.src = "#";
    position9.src = "#";
     
    // let modalTextCreated = document.querySelector(".modal_text");
    while(victoryModalBox.firstChild){
        victoryModalBox.removeChild(victoryModalBox.firstChild);
    }
    
}

function checkModal(){
    if(victoryModal.style.display == "flex"){
        victoryModal.addEventListener("click", function(){
            victoryModal.style.display = "none";
            resetAll();
        })
    }
}