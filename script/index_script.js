const mainScreen = document.querySelector(".main_container")

const calculatorAppBtn = document.querySelector("#calculator_app_button")

calculatorAppBtn.addEventListener("click", function(){
    $(mainScreen).load('apps/calculator.html');
    document.title = document.title + " - Calculator"
})
