const monthText = document.getElementById("month_text");
const daysContainer = document.getElementById("days_container");
// const previousMonth = document.getElementById("previous_month_button")
// const nextMonth = document.getElementById("next_month_button")

const sundayList = document.getElementById("sunday_list");
const mondayList = document.getElementById("monday_list");
const tuesdayList = document.getElementById("tuesday_list");
const wednesdayList = document.getElementById("wednesday_list");
const thursdayList = document.getElementById("thursday_list");
const fridayList = document.getElementById("friday_list");
const saturdayList = document.getElementById("saturday_list");

const monthList = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

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

let currentMonth = new Date(newDate.getFullYear(), newDate.getMonth()); //PEGAR O MÊS ATUAL
let lastMonthDay = new Date(newDate.getFullYear(), newDate.getMonth()+lastMonthDayParameter, 0); //ULTIMO DIA DO MÊS
let lastMonth = new Date(newDate.getFullYear(), newDate.getMonth(), +lastMonthParameter); //PEGAR O ULTIMO DIA DO MÊS PASSADO

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
            }else{
                console.log("Posição Vazia - Next -->")
            }
        }
        daysOfLastMonth = HANDLEdaysOfLastMonth;
        HANDLEdaysOfLastMonth = [];
        
        // for(let i = daysOfLastMonthLength-1; i > -1; i--){
        //     if(daysOfLastMonth[i] == undefined){
        //         daysOfLastMonth.shift();
        //     }
        // }
    }
    // COLHER DIAS DO PROXIMO MES PARA COMPLETAR A PAGINA DO MÊS ATUAL
    if(daysOfMonthSelected[daysOfMonthSelected.length - 1].weekDay !== 6){
        for(let i = daysOfMonthSelected[daysOfMonthSelected.length - 1].weekDay; i < 6; i++){
            incrementedDays = incrementedDays + 1;
            let theDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth()+1, incrementedDays)
            // console.log("incremento depois: "+incrementedDays)
            console.log(theDay)
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
            }else{
                console.log("Posição Vazia - Next -->")
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
        console.log(daysOfNextMonth)
        for(let i = 0; i < daysOfNextMonth.length; i++){
            console.log(daysOfNextMonth[i])
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

function previousMonth(){
    clearAll();
    previous = previous-1;
    lastMonthDayParameter = lastMonthDayParameter-1
    lastMonthParameter = lastMonthParameter-1;
    currentMonth = new Date(newDate.getFullYear(), newDate.getMonth()+previous);
    lastMonthDay = new Date(newDate.getFullYear(), newDate.getMonth()+lastMonthDayParameter, 0);
    lastMonth = new Date(newDate.getFullYear(), newDate.getMonth(), +lastMonthParameter);   
    getData();
    printCalendar();
}

getData();

printCalendar();

if(printed == true){
    selectedDay()
}


// let teste = new Date(nova_data.getFullYear(), nova_data.getMonth()+1, 0)

// console.log(teste)
