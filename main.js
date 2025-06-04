import './style.scss';
import './desktop.scss';
import SuperExpressive from 'super-expressive';
import {nameCard, nameInput, nameError, numberCard, numberInput, numberError, cardmonth, inputmonth, montherror, cardyear, inputCard, errorYear, cvc_Card, input_Cvc, error_Cvc, confirm, form, gracias} from './nodos.js';

//_______________________________________________________________________________________________________________________________________


//regex y manejador de eventos

let caracteres = /[A-Za-z]/g;
let add = /([0-9]{4})/g; //grupo de 4 numeros 
let space = SuperExpressive().whitespaceChar.allowMultipleMatches.toRegex();
let number = SuperExpressive().allowMultipleMatches.digit.toRegex();


const format = (input, error, key, message)=>{
    if(input.value.match(key)!== null){
        error.textContent = `Wrong format, ${message}`;
        input.classList.add('cardholder');
        error.classList.remove('error');
    }else{
        input.classList.remove('cardholder');
        error.classList.add('error');
    }
};

const blank = (input, error) =>{
    if (input.value === '') {
        error.textContent = `Can't be blank`;
        input.classList.add('cardholder');
        error.classList.remove('error');
    } else {
        input.classList.remove('cardholder');
        error.classList.add('error');
}
};

//el nombre input

nameInput.addEventListener('input', ()=>{
    (nameInput.value=== '')?
        nameCard.textContent = 'JANE APPLESEED'
        : nameCard.textContent = nameInput.value;
    format(nameInput, nameError, /\d/g, 'letters only');
});


//el number input

numberInput.addEventListener('input',(event)=>{
    let input = event.target.value.replace(/\D/g, '').slice(0, 16);//seleciono texto escrito
    
    if(numberInput.value.match(caracteres) !== null){
        numberError.textContent = 'Wrong format, numbers only';
        numberInput.classList.add('cardholder');
        numberError.classList.remove('error');
    }else{
        numberInput.value = input.replace(add, '$1 ').trim();//$1 es la subcadana representada en el regex 
        numberInput.classList.remove('cardholder');
        numberError.classList.add('error');
    }
    (numberInput.value === '')? numberCard.textContent = '0000 0000 0000 0000': numberCard.textContent = numberInput.value;
});

//el mes input

inputmonth.addEventListener('input', ()=>{
    (inputmonth.value === '')? cardmonth.textContent = '00' : cardmonth.textContent = inputmonth.value;
    format(inputmonth, montherror, caracteres, 'numbers only');
});

//el year input

inputCard.addEventListener('input', ()=>{
    (inputCard.value === '')? cardyear.textContent = '00' : cardyear.textContent = inputCard.value;
    format(inputCard, errorYear, caracteres, 'numbers only');
});

//el cvc input

input_Cvc.addEventListener('input',()=>{
    (input_Cvc.value === '')? cvc_Card.textContent = '000' : cvc_Card.textContent = input_Cvc.value;
    format(input_Cvc, error_Cvc, caracteres, 'numbers only');
});

//___________________________________________________________________________________________________________________________________
//validacion de envio de datos



confirm.addEventListener('click', (event)=>{
    event.preventDefault();
    //validando nombre

    let name = nameInput.value;
    let numero = numberInput.value;
    let month = inputmonth.value;
    let year = inputCard.value;
    let cvc = input_Cvc.value;

    blank(nameInput, nameError);
    
    //validando numero
    blank(numberInput, numberError);
    
    const rawNumber = numberInput.value.replace(/\s/g, '');
if (rawNumber.length !== 16) {
    numberError.textContent = 'Card number must be 16 digits';
    numberInput.classList.add('cardholder');
    numberError.classList.remove('error');
    numero = '';
}
    //valido mes
    blank(inputmonth, montherror);
if (inputmonth.value !== '') {
    const parsedMonth = parseInt(inputmonth.value);
    if(Number.isNaN(parsedMonth) || parsedMonth < 1 || parsedMonth > 12){
        montherror.textContent = 'Wrong Month';
        inputmonth.classList.add('cardholder');
        montherror.classList.remove('error');
        month = '';
    }
}
    
    //valido año
    const currentYear = new Date().getFullYear() % 100;
    const parsedYear = parseInt(inputCard.value);
if (isNaN(parsedYear) || parsedYear < currentYear || parsedYear > currentYear + 5){
        errorYear.textContent = 'Wrong year';
        inputCard.classList.add('cardholder');
        errorYear.classList.remove('error');
        year = '';
    }else if(parsedYear === 0) {
        errorYear.textContent = 'Wrong year';
        inputCard.classList.add('cardholder');
        errorYear.classList.remove('error');
        
    }
    blank(inputCard, errorYear);
    
    //valido cvc
    if(!/^\d{3}$/.test(input_Cvc.value)){
        error_Cvc.textContent = 'Wrong CVC';
        input_Cvc.classList.add('cardholder');
        error_Cvc.classList.remove('error');
        cvc = '';
    }
    blank(input_Cvc, error_Cvc);
    
    

    //validar boton
    
    if(name && numero && month && year && cvc ){
        localStorage.setItem('formularioTarjeta', JSON.stringify({
        nombre: nameInput.value,
        numero: numberInput.value,
        mes: inputmonth.value,
        año: inputCard.value,
        cvc: input_Cvc.value }));
        form.style.display = 'none';
        gracias.style.display= 'block';
    }

});


