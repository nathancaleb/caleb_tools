const mainScript = document.querySelector("#main_script")
const mainScreen = document.querySelector(".main_container")

const calculatorAppBtn = document.querySelector("#calculator_app_button")
const calendarAppBtn = document.querySelector("#calendar_app_button")
const wordsAppBtn = document.querySelector("#words_app_button")
const drawNumbersAppBtn = document.querySelector("#draw_numbers_app_button")
const temperatureAppBtn = document.querySelector("#temperature_app_button")
const diceAppBtn = document.querySelector("#dice_app_button")
const tictactoeAppBtn = document.querySelector("#tictactoe_app_button")

calculatorAppBtn.addEventListener("click", function(){
    $(mainScreen).load('apps/calculator.html');
    document.title = document.title + " - Calculator";
})

calendarAppBtn.addEventListener("click", function(){
    $(mainScreen).load('apps/calendar.html');
    document.title = document.title + " - Calendar"
})

wordsAppBtn.addEventListener("click", function(){
    $(mainScreen).load('apps/words.html');
    document.title = document.title + " - Words"
})

drawNumbersAppBtn.addEventListener("click", function(){
    $(mainScreen).load('apps/draw_numbers.html');
    document.title = document.title + " - Draw Numbers"
})

temperatureAppBtn.addEventListener("click", function(){
    $(mainScreen).load('apps/temperature.html');
    document.title = document.title + " - Temperature"
})

diceAppBtn.addEventListener("click", function(){
    $(mainScreen).load('apps/dice.html');
    document.title = document.title + " - Dice"
})

tictactoeAppBtn.addEventListener("click", function(){
    $(mainScreen).load('apps/tic_tac_toe.html');
    document.title = document.title + " - Tic-Tac-Toe"
})
