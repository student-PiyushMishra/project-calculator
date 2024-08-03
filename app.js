const input = document.querySelector('input');


function appendToInput(val){
    input.value = input.value + val
}

function calculate(){
    let equation = eval(input.value)
    input.value = equation
}
    
const clear_btn = document.querySelector('.clear-btn')

clear_btn.addEventListener('click',function(){
    input.value = ""
})