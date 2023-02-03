import './style.scss';
import './desktop.scss';
import SuperExpressive from 'super-expressive';

//nombre de la tarjeta 

let nameCard = document.querySelector('.card__details--name');
let nameInput = document.querySelector('#cardholder');
let nameError = document.querySelector('.errorName');

//regex y manejador de eventos

let number = SuperExpressive().allowMultipleMatches.digit.toRegex();


nameInput.addEventListener('input', ()=>{
    (nameInput.value=== '')?
        nameCard.textContent = 'JANE APPLESEED'
        : nameCard.textContent = nameInput.value;
    if(nameInput.value.match(number) !== null){
        nameError.textContent = 'Wrong format, characters only';
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
let add = /([0-9]{4})/g; //grupo de 4 numeros 
let space = SuperExpressive().whitespaceChar.allowMultipleMatches.toRegex();

numberInput.addEventListener('input',(event)=>{
    let input = event.target.value;//seleciono texto escrito
    
    if(numberInput.value.match(caracteres) !== null){
        numberError.textContent = 'Wrong format, numbers only';
        numberInput.classList.add('cardholder');
        numberError.classList.remove('error');
    }else{
        numberInput.value = input.replace(space, '').replace(add, '$1 ').trim();//$1 es la subcadana representada en el regex 
        numberInput.classList.remove('cardholder');
        numberError.classList.add('error');
    }
    (numberInput.value === '')? numberCard.textContent = '0000 0000 0000 0000': numberCard.textContent = numberInput.value;
});

//mes tarjeta

let cardmonth = document.querySelector('.card__month');
let inputmonth = document.querySelector('.form__label--input');
let montherror = document.querySelector('.errorDate');

//regex y manejador de eventos

inputmonth.addEventListener('input', ()=>{
    (inputmonth.value === '')?
        cardmonth.textContent = '00':
        cardmonth.textContent = inputmonth.value;
        
    if(inputmonth.value.match(number) !== null){
        montherror.textContent = 'Wrong format';
        inputmonth.classList.add('cardholder');
        inputmonth.classList.remove('error');
    }else{
        inputmonth.classList.remove('cardholder');
        inputmonth.classList.add('error');
    }





});