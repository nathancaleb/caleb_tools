const mainScript = document.querySelector("#main_script")
const mainScreen = document.querySelector(".main_container")

const calculatorAppBtn = document.querySelector("#calculator_app_button")
const calendarAppBtn = document.querySelector("#calendar_app_button")

calculatorAppBtn.addEventListener("click", function(){
    $(mainScreen).load('apps/calculator.html');
    document.title = document.title + " - Calculator";
    // const otheScript = document.createElement("script");
    // mainScript.insertBefore(otheScript);
    // otheScript.setAttribute("src", "script/calculator_script.js") 
})

calendarAppBtn.addEventListener("click", function(){
    $(mainScreen).load('apps/calendar.html');
    document.title = document.title + " - Calendar"
    // const otheScript = document.createElement("script");
    // mainScript.insertBefore(otheScript);
    // otheScript.setAttribute("src", "script/calendar_script.js") 
})


{/* <script src="script/calculator_script.js"></script>
<script src="script/calendar_script.js"></script> */}