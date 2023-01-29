import './style.scss';
import SuperExpressive from 'super-expressive';

//nombre de la tarjeta 

let nameCard = document.querySelector('.card__details--name');
let nameInput = document.querySelector('#cardholder');
let nameError = document.querySelector('.errorName');

//regex y manejador de eventos

let number = SuperExpressive().allowMultipleMatches.digit.toRegex();
let nn = /\d/g;


nameInput.addEventListener('input', ()=>{
    (nameInput.value=== '')?
        nameCard.innerText = 'JANE APPLESEED'
        : nameCard.innerText = nameInput.value;
    if(nameInput.value.match(number) !== null){
        nameError.innerText = 'Wrong format, characters only';
        nameInput.classList.add('cardholder');
        nameError.classList.remove('error');     
    }else{
        nameInput.classList.remove('cardholder');
        nameError.classList.add('error');
    }
});

//numero de la tarjeta

let numberCard = document.querySelector('.card__front--number');
let numberInput = document.querySelector('#cardnumber');
let numberError = document.querySelector('.errorNumber');

//regex y manejador de eventos

let caracteres = /[A-z]/g;
let add = /([0-9]{4})/g;
let space = SuperExpressive().whitespaceChar.allowMultipleMatches.toRegex();
numberInput.addEventListener('input',(event)=>{
    let input = event.target.value;//seleciono texto escrito
    
    numberCard.innerText = numberInput.value;

    if(numberInput.value.match(caracteres) !== null){
        numberError.innerText = 'Wrong format, numbers only';
        numberInput.classList.add('cardholder');
        numberError.classList.remove('error');
    }else{
        numberInput.value = input.replace(space, '').replace(add, '$1 ').trim();
        numberInput.classList.remove('cardholder');
        numberError.classList.add('error');
    }
    if (numberInput.value === '') numberCard.innerText = '0000 0000 0000 0000';
});
