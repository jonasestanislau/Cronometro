// Selecionando os elementos
let labelMilliSeconds = document.querySelector('.milliSeconds');
let labelSeconds = document.querySelector('.seconds');
let labelMinutes = document.querySelector('.minutes');
let labelHours = document.querySelector('.hours');
let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');

// Atribuindo o valor 0 para os elementos acima
labelMilliSeconds.value = 0;
labelSeconds.value = 0;
labelMinutes.value = 0;
labelHours.value = 0;

function stopwatch() {
    labelMilliSeconds.innerHTML = String(labelMilliSeconds.value++).padStart(2,'0');
    console.log('millesegundos')
    if(labelMilliSeconds.value == 101) {
        labelSeconds.value += 1;
        labelSeconds.innerHTML = String(labelSeconds.value).padStart(2,'0');
        labelMilliSeconds.value = 0;
        console.log('segundos')
    }
    if(labelSeconds.value == 60) {
        labelMinutes.value += 1;
        labelMinutes.innerHTML = String(labelMinutes.value).padStart(2,'0');
        labelSeconds.value = 0;
        console.log('minutos')
    }
    if(labelMinutes.value == 60) {
        labelMinutes.value = 0;
        labelMinutes.innerHTML = String(labelMinutes.value).padStart(2,'0');
        labelHours.value += 1;
        labelHours.innerHTML = String(labelHours.value).padStart(2,'0');
        console.log('horas')
    }
 }

setInterval(stopwatch,1000)

