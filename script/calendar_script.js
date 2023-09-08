// DOM ELEMENTS

const clockText = document.querySelector(".clock_text")
const todayText = document.querySelector(".today_text")
const monthText = document.getElementById("month_text");
const daysContainer = document.getElementById("days_container");
const sundayList = document.getElementById("sunday_list");
const mondayList = document.getElementById("monday_list");
const tuesdayList = document.getElementById("tuesday_list");
const wednesdayList = document.getElementById("wednesday_list");
const thursdayList = document.getElementById("thursday_list");
const fridayList = document.getElementById("friday_list");
const saturdayList = document.getElementById("saturday_list");

const hourBox = document.querySelector(".now_time_box");
const todayBox = document.querySelector(".today_box");
const calendarBox = document.querySelector(".calendar");
const optionsBox = document.querySelector(".options_box");
const monthListBox = document.querySelector(".month_list_box")
const yearMonthBox = document.querySelector(".year_month_list")
const yearListBox = document.querySelector(".year_list_box")

const monthPickerSelector = document.querySelectorAll(".month_item")
const yearPickerSelector = document.querySelectorAll(".years_in_range")
const yearsOutRange = document.querySelectorAll(".years_out_range")
const yearRangeBox = document.querySelector(".year_range_box")

// VARIAVEL PARA ESCREVER MÊS E SEMANA
const monthList = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const weekList = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]

// VARIAVEIS PARA MANIPULAÇÃO
let newDate = new Date();
let daysOfMonthSelected = [];
let daysOfLastMonth = [];
let daysOfNextMonth = [];
let HANDLEdaysOfLastMonth = [];
let HANDLEdaysOfNextMonth = [];
let decrementedDays = 0;
let incrementedDays = 1;
let previous = 0;

let currentMonthParameter = 0;
let lastMonthDayParameter = 1;
let lastMonthParameter = 0;

let sundayArray = [];
let mondayArray = [];
let tuesdayArray = [];
let wednesdayArray = [];
let thursdayArray = [];
let fridayArray = [];
let saturdayArray = [];
let allWeeks = [];

let printed = false;
let daySelectedStatus = false;
let currentMonthStatus = true;
let daySelected = ""
let fullprint = false;
let monthPickerStatus = false;
let yearPickerStatus = false;

// VARIAVEIS PARA MANIPULAÇÃO DE DATA
let currentMonth = new Date(newDate.getFullYear(), newDate.getMonth()); //PEGAR O MÊS ATUAL
let lastMonthDay = new Date(newDate.getFullYear(), newDate.getMonth()+lastMonthDayParameter, 0); //ULTIMO DIA DO MÊS
let lastMonth = new Date(newDate.getFullYear(), newDate.getMonth(), +lastMonthParameter); //PEGAR O ULTIMO DIA DO MÊS PASSADO

const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
// console.log(isLeapYear(2019)); // false
// console.log(isLeapYear(2020)); //true

// FUNÇÃO PARA PEGAR E IMPRIMIR A HORA
const getHours = () => {
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();
    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;
    const second = seconds < 10 ? `0${seconds}` : seconds;
    clockText.innerHTML = `${hour}:${minute}:${second}`;
}
  
  setInterval(() => {
    getHours()
  }, 1000)

//FUNÇÃO PARA PEGAR O DIA DE HOJE
const getToday = () => {
    const todayDate = newDate.getDate();
    const todayWeek = newDate.getDay();
    const todayMonth = newDate.getMonth();
    const todayYear = newDate.getFullYear();
    todayText.innerHTML = `${weekList[todayWeek]}, ${todayDate} de ${monthList[todayMonth]} de ${todayYear}`
}

getToday(); //CHAMANDO A FUNÇÃO HOJE

// FUNÇÃO PARA LIMPAR TODAS AS VARIAVEIS, QUANDO ALTERA O MÊS
function clearAll(){
    daysOfMonthSelected = [];
    daysOfLastMonth = [];
    daysOfNextMonth = [];
    HANDLEdaysOfLastMonth = [];
    HANDLEdaysOfNextMonth = [];
    decrementedDays = 0;
    incrementedDays = 0;
    sundayArray = [];
    mondayArray = [];
    tuesdayArray = [];
    wednesdayArray = [];
    thursdayArray = [];
    fridayArray = [];
    saturdayArray = [];
    allWeeks = [];
    printed = false;
    daySelectedStatus = false;
    daySelected = "";
    fullprint = false;
    
    

    let sundayListlenght = sundayList.children.length;
    for(let i = sundayListlenght-1; i > 0; i--){
        sundayList.children.item(i).parentNode.removeChild(sundayList.children.item(i));
    }

    let mondayListlenght = mondayList.children.length;
    for(let i = mondayListlenght-1; i > 0; i--){
        mondayList.children.item(i).parentNode.removeChild(mondayList.children.item(i));
    }

    let tuesdayListlenght = tuesdayList.children.length;
    for(let i = tuesdayListlenght-1; i > 0; i--){
        tuesdayList.children.item(i).parentNode.removeChild(tuesdayList.children.item(i));
    }

    let wednesdayListlenght = wednesdayList.children.length;
    for(let i = wednesdayListlenght-1; i > 0; i--){
        wednesdayList.children.item(i).parentNode.removeChild(wednesdayList.children.item(i));
    }

    let thursdayListlenght = thursdayList.children.length;
    for(let i = thursdayListlenght-1; i > 0; i--){
        thursdayList.children.item(i).parentNode.removeChild(thursdayList.children.item(i));
    }

    let fridayListlenght = fridayList.children.length;
    for(let i = fridayListlenght-1; i > 0; i--){
        fridayList.children.item(i).parentNode.removeChild(fridayList.children.item(i));
    }

    let saturdayListlenght = saturdayList.children.length;
    for(let i = saturdayListlenght-1; i > 0; i--){
        saturdayList.children.item(i).parentNode.removeChild(saturdayList.children.item(i));
    }
}

// FUNÇÃO PARA PEGAR OS VALORES DO DATE
function getData(){
        monthName = monthList[currentMonth.getMonth()];
        currentYear = currentMonth.getFullYear();
    
    // IMPRIME O MÊS E O ANO SELECIONADO
    monthText.innerHTML = `${monthName} - ${currentYear}`

    // COLHE DIAS DO MES SELECIONADO
    for(let i = 0; i < lastMonthDay.getDate(); i++){
        let theDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i+1)
        daysOfMonthSelected[i] = {
            day: theDay.getDate(),
            weekDay: theDay.getDay(),
            month: theDay.getMonth()
        }
    }

    if(currentMonth.getMonth()==1){
        if(isLeapYear(currentMonth.getFullYear())){
            if(daysOfMonthSelected[28]==undefined){
                const beforeLeapDay = daysOfMonthSelected[27].weekDay
                daysOfMonthSelected[28] = {
                    day: 29,
                    weekDay: beforeLeapDay+1,
                    month: currentMonth.getMonth()
                }
            }
        }

    }

    // COLHE DIAS DO MÊS PASSADO PARA COMPLETAR A PAGINA DO MÊS ATUAL
    if(daysOfMonthSelected[0].weekDay !== 0){
        for(let i = daysOfMonthSelected[0].weekDay; i > 0; i--){
            let theDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), decrementedDays--)
            daysOfLastMonth[i] = {
                day: theDay.getDate(),
                weekDay: theDay.getDay(),
                month: theDay.getMonth()
            }
        }
     
        const daysOfLastMonthLength = daysOfLastMonth.length

        for(let i = 0; i < daysOfLastMonthLength; i++){
            if(daysOfLastMonth[i] !== undefined){
                HANDLEdaysOfLastMonth.push(daysOfLastMonth[i])
            }
        }
        daysOfLastMonth = HANDLEdaysOfLastMonth;
        HANDLEdaysOfLastMonth = [];
    }

    // COLHER DIAS DO PROXIMO MES PARA COMPLETAR A PAGINA DO MÊS ATUAL
    if(daysOfMonthSelected[daysOfMonthSelected.length - 1].weekDay !== 6){
        for(let i = daysOfMonthSelected[daysOfMonthSelected.length - 1].weekDay; i < 6; i++){
            incrementedDays = incrementedDays + 1;
            let theDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth()+1, incrementedDays)
            daysOfNextMonth[i] = {
                day: theDay.getDate(),
                weekDay: theDay.getDay(),
                month: theDay.getMonth()
            }
        }

        const daysOfNextMonthLength = daysOfNextMonth.length

        for(let i = 0; i < daysOfNextMonthLength; i++){
            if(daysOfNextMonth[i] !== undefined){
                HANDLEdaysOfNextMonth.push(daysOfNextMonth[i])
            }
        }
        daysOfNextMonth = HANDLEdaysOfNextMonth;
        HANDLEdaysOfNextMonth = [];
    }
}

// IMPRENSSÃO DO CALENDARIO EM TELA
function printCalendar(){
    if (daysOfLastMonth[0]){       
            for(let i = 0; i < daysOfLastMonth.length; i++){
                const createDate = document.createElement("li");
                if(i == 0){
                    createDate.innerHTML = daysOfLastMonth[i].day;
                    sundayList.appendChild(createDate);
                    createDate.classList = "day_box other_month_day";
                    createDate.setAttribute("id", `day_${daysOfLastMonth[i].day}_${monthList[currentMonth.getMonth()-1]}`);
                }
                else if(i == 1){
                    createDate.innerHTML = daysOfLastMonth[i].day;
                    mondayList.appendChild(createDate);
                    createDate.classList = "day_box other_month_day";
                    createDate.setAttribute("id", `day_${daysOfLastMonth[i].day}_${monthList[currentMonth.getMonth()-1]}`);
                }
                else if(i == 2){
                    createDate.innerHTML = daysOfLastMonth[i].day;
                    tuesdayList.appendChild(createDate);
                    createDate.classList = "day_box other_month_day";
                    createDate.setAttribute("id", `day_${daysOfLastMonth[i].day}_${monthList[currentMonth.getMonth()-1]}`);
                }
                else if(i == 3){
                    createDate.innerHTML = daysOfLastMonth[i].day;
                    wednesdayList.appendChild(createDate);
                    createDate.classList = "day_box other_month_day";
                    createDate.setAttribute("id", `day_${daysOfLastMonth[i].day}_${monthList[currentMonth.getMonth()-1]}`);
                }
                else if(i == 4){
                    createDate.innerHTML = daysOfLastMonth[i].day;
                    thursdayList.appendChild(createDate);
                    createDate.classList = "day_box other_month_day";
                    createDate.setAttribute("id", `day_${daysOfLastMonth[i].day}_${monthList[currentMonth.getMonth()-1]}`);
                }
                else if(i == 5){
                    createDate.innerHTML = daysOfLastMonth[i].day;
                    fridayList.appendChild(createDate);
                    createDate.classList = "day_box other_month_day";
                    createDate.setAttribute("id", `day_${daysOfLastMonth[i].day}_${monthList[currentMonth.getMonth()-1]}`);
                }
                
            }
    }

    for(let i = 0; i < daysOfMonthSelected.length; i++){
        if(daysOfMonthSelected[i].weekDay == 0){
            sundayArray[i] = daysOfMonthSelected[i].day
        }
        else if(daysOfMonthSelected[i].weekDay == 1){
            mondayArray[i] = daysOfMonthSelected[i].day
        }
        else if(daysOfMonthSelected[i].weekDay == 2){
            tuesdayArray[i] = daysOfMonthSelected[i].day
        }
        else if(daysOfMonthSelected[i].weekDay == 3){
            wednesdayArray[i] = daysOfMonthSelected[i].day
        }
        else if(daysOfMonthSelected[i].weekDay == 4){
            thursdayArray[i] = daysOfMonthSelected[i].day
        }
        else if(daysOfMonthSelected[i].weekDay == 5){
            fridayArray[i] = daysOfMonthSelected[i].day
        }
        else if(daysOfMonthSelected[i].weekDay == 6){
            saturdayArray[i] = daysOfMonthSelected[i].day
        }
    }

     sundayArray = sundayArray.filter(function (i) {
        return i;
      });
      mondayArray = mondayArray.filter(function (i) {
        return i;
      });
      tuesdayArray = tuesdayArray.filter(function (i) {
        return i;
      });
      wednesdayArray = wednesdayArray.filter(function (i) {
        return i;
      });
      thursdayArray = thursdayArray.filter(function (i) {
        return i;
      });
      fridayArray = fridayArray.filter(function (i) {
        return i;
      });
      saturdayArray = saturdayArray.filter(function (i) {
        return i;
      });
      
      allWeeks.push(sundayArray)
      allWeeks.push(mondayArray)
      allWeeks.push(tuesdayArray)
      allWeeks.push(wednesdayArray)
      allWeeks.push(thursdayArray)
      allWeeks.push(fridayArray)
      allWeeks.push(saturdayArray)
      
      for(let i = 0; i < allWeeks.length; i++){
        for(let j = 0; j < allWeeks[i].length; j++){
            const createDate = document.createElement("li");
            if(i == 0){
                createDate.innerHTML = allWeeks[i][j];
                sundayList.append(createDate);
                createDate.classList = "day_box";
                createDate.setAttribute("id", `day_${allWeeks[i][j]}_${monthList[currentMonth.getMonth()]}`);
            }
            else if(i == 1){
                createDate.innerHTML = allWeeks[i][j];
                mondayList.append(createDate);
                createDate.classList = "day_box";
                createDate.setAttribute("id", `day_${allWeeks[i][j]}_${monthList[currentMonth.getMonth()]}`);
            }
            else if(i == 2){
                createDate.innerHTML = allWeeks[i][j];
                tuesdayList.append(createDate);
                createDate.classList = "day_box";
                createDate.setAttribute("id", `day_${allWeeks[i][j]}_${monthList[currentMonth.getMonth()]}`);
            }
            else if(i == 3){
                createDate.innerHTML = allWeeks[i][j];
                wednesdayList.append(createDate);
                createDate.classList = "day_box";
                createDate.setAttribute("id", `day_${allWeeks[i][j]}_${monthList[currentMonth.getMonth()]}`);
            }
            else if(i == 4){
                createDate.innerHTML = allWeeks[i][j];
                thursdayList.append(createDate);
                createDate.classList = "day_box";
                createDate.setAttribute("id", `day_${allWeeks[i][j]}_${monthList[currentMonth.getMonth()]}`);
            }
            else if(i == 5){
                createDate.innerHTML = allWeeks[i][j];
                fridayList.append(createDate);
                createDate.classList = "day_box";
                createDate.setAttribute("id", `day_${allWeeks[i][j]}_${monthList[currentMonth.getMonth()]}`);
            }
            else if(i == 6){
                createDate.innerHTML = allWeeks[i][j];
                saturdayList.append(createDate);
                createDate.classList = "day_box";
                createDate.setAttribute("id", `day_${allWeeks[i][j]}_${monthList[currentMonth.getMonth()]}`);
            }

        }
      }

      fullprint = true;

      if (daysOfNextMonth[0] && fullprint == true){     
        for(let i = 0; i < daysOfNextMonth.length; i++){
            const createDate = document.createElement("li");
            if(daysOfNextMonth[i].weekDay == 1){
                createDate.innerHTML = daysOfNextMonth[i].day;
                mondayList.appendChild(createDate);
                createDate.classList = "day_box other_month_day";
                createDate.setAttribute("id", `day_${daysOfNextMonth[i].day}_${monthList[currentMonth.getMonth()+1]}`);
            }
            else if(daysOfNextMonth[i].weekDay == 2){
                createDate.innerHTML = daysOfNextMonth[i].day;
                tuesdayList.appendChild(createDate);
                createDate.classList = "day_box other_month_day";
                createDate.setAttribute("id", `day_${daysOfNextMonth[i].day}_${monthList[currentMonth.getMonth()+1]}`);
            }
            else if(daysOfNextMonth[i].weekDay == 3){
                createDate.innerHTML = daysOfNextMonth[i].day;
                wednesdayList.appendChild(createDate);
                createDate.classList = "day_box other_month_day";
                createDate.setAttribute("id", `day_${daysOfNextMonth[i].day}_${monthList[currentMonth.getMonth()+1]}`);
            }
            else if(daysOfNextMonth[i].weekDay == 4){
                createDate.innerHTML = daysOfNextMonth[i].day;
                thursdayList.appendChild(createDate);
                createDate.classList = "day_box other_month_day";
                createDate.setAttribute("id", `day_${daysOfNextMonth[i].day}_${monthList[currentMonth.getMonth()+1]}`);
            }
            else if(daysOfNextMonth[i].weekDay == 5){
                createDate.innerHTML = daysOfNextMonth[i].day;
                fridayList.appendChild(createDate);
                createDate.classList = "day_box other_month_day";
                createDate.setAttribute("id", `day_${daysOfNextMonth[i].day}_${monthList[currentMonth.getMonth()+1]}`);
            }
            else if(daysOfNextMonth[i].weekDay == 6){
                createDate.innerHTML = daysOfNextMonth[i].day;
                saturdayList.appendChild(createDate);
                createDate.classList = "day_box other_month_day";
                createDate.setAttribute("id", `day_${daysOfNextMonth[i].day}_${monthList[currentMonth.getMonth()+1]}`);
            }
            
        }
    }
    return printed = true;
}

// FUNÇÃO DE CONTROLE DO DIA SELECIONADO
function selectedDay(){

        sundayList.addEventListener('click', event => {
            if(daySelectedStatus == false){
                event.target.classList.add("day_selected");
                daySelected = event.target.id
                daySelectedStatus = true;
            }
            else if(daySelectedStatus == true && daySelected == event.target.id){
                event.target.classList.remove("day_selected");
                daySelectedStatus = false;
            }
        })

        mondayList.addEventListener('click', event => {
            if(daySelectedStatus == false){
                event.target.classList.add("day_selected");
                daySelected = event.target.id
                daySelectedStatus = true;
            }
            else if(daySelectedStatus == true && daySelected == event.target.id){
                event.target.classList.remove("day_selected");
                daySelectedStatus = false;
            }
        })

        tuesdayList.addEventListener('click', event => {
            if(daySelectedStatus == false){
                event.target.classList.add("day_selected");
                daySelected = event.target.id
                daySelectedStatus = true;
            }
            else if(daySelectedStatus == true && daySelected == event.target.id){
                event.target.classList.remove("day_selected");
                daySelectedStatus = false;
            }
        })

        wednesdayList.addEventListener('click', event => {
            if(daySelectedStatus == false){
                event.target.classList.add("day_selected");
                daySelected = event.target.id
                daySelectedStatus = true;
            }
            else if(daySelectedStatus == true && daySelected == event.target.id){
                event.target.classList.remove("day_selected");
                daySelectedStatus = false;
            }
        })

        thursdayList.addEventListener('click', event => {
            if(daySelectedStatus == false){
                event.target.classList.add("day_selected");
                daySelected = event.target.id
                daySelectedStatus = true;
            }
            else if(daySelectedStatus == true && daySelected == event.target.id){
                event.target.classList.remove("day_selected");
                daySelectedStatus = false;
            }
        })

        fridayList.addEventListener('click', event => {
            if(daySelectedStatus == false){
                event.target.classList.add("day_selected");
                daySelected = event.target.id
                daySelectedStatus = true;
            }
            else if(daySelectedStatus == true && daySelected == event.target.id){
                event.target.classList.remove("day_selected");
                daySelectedStatus = false;
            }
        })

        saturdayList.addEventListener('click', event => {
            if(daySelectedStatus == false){
                event.target.classList.add("day_selected");
                daySelected = event.target.id
                daySelectedStatus = true;
            }
            else if(daySelectedStatus == true && daySelected == event.target.id){
                event.target.classList.remove("day_selected");
                daySelectedStatus = false;
            }
        })

    }

// FUNÇÃO ANTIGA INUTILIZADA --- (FUNÇÃO PARA O BOTÃO PARA IR PARA O MÊS ANTERIOR) ---
// function previousMonth(){
//     clearAll();
//     previous = previous-1;
//     console.log("lastmonthdayparameter antes: "+lastMonthDayParameter);
//     lastMonthDayParameter = lastMonthDayParameter-1
//     console.log("lastmonthdayparameter depois: "+lastMonthDayParameter);
//     lastMonthParameter = lastMonthParameter-1;
//     console.log("/////////////////////////////////////////////////")
//     console.log(currentMonth);
//     currentMonth = new Date(currentMonth.getFullYear(), newDate.getMonth()+previous);
//     console.log(currentMonth)
//     console.log("/////////////////////////////////////////////////")
//     console.log("/////////////////////////////////////////////////")
//     console.log(lastMonthDay)
//     lastMonthDay = new Date(currentMonth.getFullYear(), newDate.getMonth()+lastMonthDayParameter, 0);
//     console.log(lastMonthDay)
//     lastMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), +lastMonthParameter);
//     getData();
//     printCalendar();
// }

// FUNÇÃO PARA O BOTÃO PARA IR PARA O MÊS ANTERIOR
function previousMonth(){
    clearAll();
    currentMonth.setMonth(currentMonth.getMonth()-1)
    lastMonthDay.setMonth(currentMonth.getMonth()+1, 0);
    getData();
    printCalendar();
}

// FUNÇÃO ANTIGA INUTILIZADA --- (FUNÇÃO PARA O BOTÃO PARA IR PARA O MÊS SEGUINTE) ---
// function nextMonth(){
//     clearAll();
//     previous = previous+1;
//     lastMonthDayParameter = lastMonthDayParameter+1
//     lastMonthParameter = lastMonthParameter+1;
//     currentMonth = new Date(currentMonth.getFullYear(), newDate.getMonth()+previous);
//     // if(currentMonth.getMonth == 0){
//     //     currentMonth = new Date(currentMonth.getFullYear()+1, newDate.getMonth()+previous);
//     // }
//     // else if(currentMonth.getMonth == 11){
//     //     currentMonth = new Date(currentMonth.getFullYear()-1, newDate.getMonth()+previous);
//     // }
//     lastMonthDay = new Date(currentMonth.getFullYear(), newDate.getMonth()+lastMonthDayParameter, 0);
//     lastMonth = new Date(currentMonth.getFullYear(), newDate.getMonth(), +lastMonthParameter);   
//     getData();
//     printCalendar();
// }

// FUNÇÃO PARA O BOTÃO PARA IR PARA O MÊS SEGUINTE
function nextMonth(){
    clearAll();
    currentMonth.setMonth(currentMonth.getMonth()+1)
    lastMonthDay.setMonth(currentMonth.getMonth()+1, 0);
    getData();
    printCalendar();
}

// FUNÇÃO PARA VERIFICAR MÊS ATUAL DENTRO DO MÊS PICKER
function checkPickedCurrentMonth(){
    if(monthPickerStatus){
        monthPickerSelector[currentMonth.getMonth()].style.backgroundColor = '#4483ad';
    }
}

// FUNÇÃO PARA VERIFICAR ANO ATUAL DENTRO DO ANO PICKER
function checkPickedCurrentYear(){
    if(yearPickerStatus){
        for(let i = 0; i < yearPickerSelector.length; i++){
            if(yearPickerSelector[i].textContent == currentMonth.getFullYear()){
                yearPickerSelector[i].style.backgroundColor = '#4483ad';
            }
        }
    }
}

// FUNÇÃO PARA ABRIR O MÊS PICKER
function monthPicker(){
    hourBox.style.display = 'none';
    todayBox.style.display = 'none';
    calendarBox.style.display = 'none';
    optionsBox.style.display = 'none';
    monthListBox.style.display = 'flex';
    yearMonthBox.innerHTML = currentMonth.getFullYear()
    monthPickerStatus = true;
    checkPickedCurrentMonth();
}

// FUNÇÃO PARA ABRIR O ANO PICKER
function yearPicker(){
    hourBox.style.display = 'none';
    todayBox.style.display = 'none';
    calendarBox.style.display = 'none';
    optionsBox.style.display = 'none';
    yearListBox.style.display = 'flex';

    for(let i = 0; i < yearPickerSelector.length; i++){
        yearPickerSelector[i].style.removeProperty('background-color');
    }
    
    let currentSelectedYear = currentMonth.getFullYear();
    const lastNumberSelectedYear = Math.floor(currentSelectedYear % 10);
    let resetToPrintYear = currentSelectedYear - lastNumberSelectedYear;
    
    for(let i = 0; i < yearPickerSelector.length; i++){
        yearPickerSelector[i].innerHTML = resetToPrintYear;
        resetToPrintYear = resetToPrintYear + 1
    }

    yearsOutRange[0].innerHTML = parseInt(yearPickerSelector[0].textContent) - 1
    yearsOutRange[1].innerHTML = parseInt(yearPickerSelector[9].textContent) + 1
    
    yearRangeBox.innerHTML = `${yearPickerSelector[0].textContent} - ${parseInt(yearPickerSelector[9].textContent)} `

    yearPickerStatus = true;
    checkPickedCurrentYear();
}

// FUNÇÃO PARA ALTERAR O MÊS PELO (MÊS PICKER)
function changeMonth(selectedMonth){
    const actualMonth = newDate.getMonth()

    monthPickerSelector[currentMonth.getMonth()].style.removeProperty('background-color');

    clearAll();
    previous = (selectedMonth - actualMonth);
    lastMonthDayParameter = previous + 1;
    lastMonthParameter = previous;
    currentMonth = new Date(currentMonth.getFullYear(), newDate.getMonth()+previous);
    lastMonthDay = new Date(currentMonth.getFullYear(), newDate.getMonth()+lastMonthDayParameter, 0);
    lastMonth = new Date(currentMonth.getFullYear(), newDate.getMonth(), +lastMonthParameter);   
    getData();
    printCalendar();

    hourBox.style.display = 'flex';
    todayBox.style.display = 'flex';
    calendarBox.style.display = 'flex';
    optionsBox.style.display = 'flex';
    monthListBox.style.display = 'none';
    monthPickerStatus = false;
}

function changeYear(){

    clearAll();
    const pickedYear = parseInt(this.event.srcElement.textContent);
    // const actualYear = currentMonth.getFullYear();
    // let yearDiference = 0

    // if(pickedYear > actualYear){
    //     yearDiference = pickedYear - actualYear;
    //     currentMonth = new Date(newDate.getFullYear()+yearDiference, currentMonth.getMonth())
    // }
    // else if(pickedYear < actualYear){
    //     yearDiference = actualYear - pickedYear;
    //     currentMonth = new Date(newDate.getFullYear()-yearDiference, currentMonth.getMonth())
    // }
    currentMonth.setFullYear(pickedYear)
    getData();
    printCalendar();

    hourBox.style.display = 'flex';
    todayBox.style.display = 'flex';
    calendarBox.style.display = 'flex';
    optionsBox.style.display = 'flex';
    yearListBox.style.display = 'none';
    yearPickerStatus = false;

}

getData(); //PEGA A INFORMAÇÃO DO DATE - PRIMEIRA CHAMADA

printCalendar(); //IMPRIMI O CALENDARIO NA TELA - PRIMEIRA CHAMADA

if(printed == true){
    selectedDay() // SE O CALENDARIO ESTIVER IMPRESSO, CHAMO A FUNÇÃO DE SELEÇÃO.
}

