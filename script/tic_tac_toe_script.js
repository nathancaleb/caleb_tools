// Trazendo o simbolo do jogador
const p1Symbol = document.querySelector("#p1_img_symbol");
const p2Symbol = document.querySelector("#p2_img_symbol");

// Trazendo o menu de simbolos
const p1ToSelectSymbol = document.querySelector("#p1_option_symbol");
const p2ToSelectSymbol = document.querySelector("#p2_option_symbol")


// Variavel para verificar inicialização da partida
const playStart = false;
// variavel para definir o jogador que deseja mudar de icone
let playerToChange = 0

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
}

function changeSymbol(symbol){
    if(symbol == 'x'){
        if(playerToChange == 1){
            p1Symbol.src = "../assets/tic_tac_toe/images/svg/x_img.svg";
            p2Symbol.src = "../assets/tic_tac_toe/images/svg/o_img.svg";
            p1ToSelectSymbol.style.display = "none";
        }
        else if(playerToChange == 2){
            p2Symbol.src = "../assets/tic_tac_toe/images/svg/x_img.svg";
            p1Symbol.src = "../assets/tic_tac_toe/images/svg/o_img.svg";
            p2ToSelectSymbol.style.display = "none";
        }
    }
    else if(symbol == 'o'){
        if(playerToChange == 1){
            p1Symbol.src = "../assets/tic_tac_toe/images/svg/o_img.svg";
            p2Symbol.src = "../assets/tic_tac_toe/images/svg/x_img.svg";
            p1ToSelectSymbol.style.display = "none";
        }
        else if(playerToChange == 2){
            p2Symbol.src = "../assets/tic_tac_toe/images/svg/o_img.svg";
            p1Symbol.src = "../assets/tic_tac_toe/images/svg/x_img.svg";
            p2ToSelectSymbol.style.display = "none";
        }
    }
}

