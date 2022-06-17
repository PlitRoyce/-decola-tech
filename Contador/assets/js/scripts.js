let contador = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber')

function increment(){
    contador ++;
    CURRENT_NUMBER.innerHTML = contador;
}

function decrement(){
    contador --;
    CURRENT_NUMBER.innerHTML = contador;
}
