// SELECT INITIAL
let select = document.querySelector('.select_box');
let selectedValue = document.getElementById('selected_value');
let openOptions = document.getElementById('open_options_button');
let inputsOptions = document.querySelectorAll('.temperature_option input')
// SELECT FINAL
let selectFinal = document.querySelector('.select_box_final');
let selectedValueFinal = document.getElementById('selected_value_final');
let openOptionsFinal = document.getElementById('open_options_button_final');
let inputsOptionsFinal = document.querySelectorAll('.temperature_option_final input')

// Para SELECT INITIAL
inputsOptions.forEach(input => {
  input.addEventListener('click', event => {
    selectedValue.textContent = input.dataset.label

    const isMouseOrTouch = event.pointerType == "mouse" || event.pointerType == "touch"

    isMouseOrTouch && openOptions.click()
  })
})

// Para SELECT FINAL
inputsOptionsFinal.forEach(input => {
  input.addEventListener('click', event => {
    selectedValueFinal.textContent = input.dataset.label

    const isMouseOrTouchFinal = event.pointerType == "mouse" || event.pointerType == "touch"

    isMouseOrTouchFinal && openOptionsFinal.click()
  })
})
