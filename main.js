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
let inputmonth = document.querySelector('#cardmonth');
let montherror = document.querySelector('.errorMonth');

//regex y manejador de eventos

inputmonth.addEventListener('input', ()=>{
    (inputmonth.value === '')? cardmonth.textContent = '00' : cardmonth.textContent = inputmonth.value;
    if(inputmonth.value.match(caracteres) !== null){
        montherror.textContent = 'Wrong format';
        inputmonth.classList.add('cardholder');
        montherror.classList.remove('error');
    }else{
        inputmonth.classList.remove('cardholder');
        montherror.classList.add('error');
    }
});

//año tarjeta

let cardyear = document.querySelector('.card__year');
let inputCard = document.querySelector('#cardyear');
let errorYear = document.querySelector('.errorYear');

inputCard.addEventListener('input', ()=>{
    (inputCard.value === '')? cardyear.textContent = '00' : cardyear.textContent = inputCard.value;
    if(inputCard.value.match(caracteres) !== null){
        errorYear.textContent = 'Wrong format';
        inputCard.classList.add('cardholder');
        errorYear.classList.remove('error');
    }else{
        inputCard.classList.remove('cardholder');
        errorYear.classList.add('error');
    }
});


//cvc tarjeta

let cvc_Card = document.querySelector('.card__back--cvc');
let input_Cvc = document.querySelector('#cardcvc');
let error_Cvc = document.querySelector('.errorCvc');

input_Cvc.addEventListener('input',()=>{
    (input_Cvc.value === '')? cvc_Card.textContent = '000' : cvc_Card.textContent = input_Cvc.value;
    if(input_Cvc.value.match(caracteres) !== null){
        error_Cvc.textContent = 'Wrong format';
        input_Cvc.classList.add('cardholder');
        error_Cvc.classList.remove('error');
    }else{
        input_Cvc.classList.remove('cardholder');
        error_Cvc.classList.add('error');
    }
});