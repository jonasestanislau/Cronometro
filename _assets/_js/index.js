let seconds = 0;
let minutes = 0;
let hours = 0;
let milesimos = 0;
let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let intervalo;
let statusBtnClick = 0;

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

btnStart.addEventListener('click', () => {
    if(statusBtnClick == 1) {
        clearInterval(intervalo);
        document.querySelector('p.start').innerHTML = '<i class="fa-solid fa-play"></i>';
        statusBtnClick = 0;
    }
    else {
        intervalo = setInterval(cronometro,10);
        document.querySelector('p.start').innerHTML = '<i class="fa-solid fa-pause"></i>';
        statusBtnClick = 1;
    }
})

btnStop.addEventListener('click', () => {
    clearInterval(intervalo);
    document.querySelector('.hours').innerHTML = '00'
    document.querySelector('.minutes').innerHTML = '00'
    document.querySelector('.seconds').innerHTML = '00'
    document.querySelector('.milesimo').innerHTML = '00'
    document.querySelector('p.start').innerHTML = '<i class="fa-solid fa-play"></i>';
})
