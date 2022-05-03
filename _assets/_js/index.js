// Variáveis iniciando em '0'
let seconds = 0;
let minutes = 0;
let hours = 0;
let milesimos = 0;

// Função que mostra hora,minutos,segundos e milésimos quando ela é chamada;
function cronometro() {
    document.querySelector('.milesimo').innerHTML = String(milesimos++).padStart(2,'0');
    if(milesimos == 100) {
        seconds += 1;
        milesimos = 0;
        document.querySelector('.seconds').innerHTML = String(seconds).padStart(2,'0');
    }
    else if(seconds == 60) {
        minutes += 1
        seconds = 0;
        document.querySelector('.minutes').innerHTML = String(minutes).padStart(2,'0');
    }
    else if(minutes == 60) {
        hours += 1
        minutes = 0;
        document.querySelector('.hours').innerHTML = String(hours).padStart(2,'0');
    }
}

const buttonActions = document.querySelectorAll('i');// icones de start e stop
let startCronometro; // undefined

// Evento start
buttonActions[0].addEventListener('click', () => {
    startCronometro = setInterval(cronometro,10); // Atribui a função a variável startCronometro
    console.log('clicou no start')
    buttonActions[0].classList.remove('fa-play');
    buttonActions[0].classList.add('fa-pause');
})

// Evento stop
buttonActions[1].addEventListener('click', () => {
    clearInterval(startCronometro);// Para a função
    console.log('clicou no stop')
})


