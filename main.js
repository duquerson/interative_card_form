import './style.scss';
import './desktop.scss';
import SuperExpressive from 'super-expressive';
import * as nodo from './nodos.js';

//_______________________________________________________________________________________________________________________________________

const {nameCard, nameInput, nameError, numberCard, numberInput, numberError, cardmonth, inputmonth, montherror, cardyear, inputCard, errorYear, cvc_Card, input_Cvc, error_Cvc, confirm, form, gracias} = nodo;

//regex y manejador de eventos

let caracteres = /[A-z]/g;
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
    if(input.value=== '' ){
        error.textContent = `Can't be blank`;
        input.classList.add('cardholder');
        error.classList.remove('error');
    }
};

//el nombre input

nameInput.addEventListener('input', ()=>{
    (nameInput.value=== '')?
        nameCard.textContent = 'JANE APPLESEED'
        : nameCard.textContent = nameInput.value;
    format(nameInput, nameError, number, 'characters only');
});


//el number input

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



nodo.confirm.addEventListener('click', (event)=>{
    event.preventDefault();
    //validando nombre

    let name = nodo.nameInput.value;
    let numero = nodo.numberInput.value;
    let month = nodo.inputmonth.value;
    let year = nodo.inputCard.value;
    let cvc = nodo.input_Cvc.value;

    blank(nameInput, nameError);
    
    //validando numero
    blank(numberInput, numberError);
    
    if(numberInput.value.length < 19){
        numberError.textContent = 'Wrong number';
        numberInput.classList.add('cardholder');
        numberError.classList.remove('error');
        numero = '';
    }
    //valido mes
    if(parseInt(inputmonth.value) === 0 || parseInt(inputmonth.value) > 12){
        montherror.textContent = 'Wrong Month';
        inputmonth.classList.add('cardholder');
        montherror.classList.remove('error');
        month = '';
    }
    blank(inputmonth, montherror);
    
    //valido año
    if(parseInt(inputCard.value)<23 || parseInt(inputCard.value)>=28){
        errorYear.textContent = 'Wrong year';
        inputCard.classList.add('cardholder');
        errorYear.classList.remove('error');
        year='';
    }else if(parseInt(inputCard.value) === 0) {
        errorYear.textContent = 'Wrong year';
        inputCard.classList.add('cardholder');
        errorYear.classList.remove('error');
        
    }
    blank(inputCard, errorYear);
    
    //valido cvc
    if(parseInt(input_Cvc.value)===0 || parseInt(input_Cvc.value) <= 3){
        error_Cvc.textContent = 'Wrong CVC';
        input_Cvc.classList.add('cardholder');
        error_Cvc.classList.remove('error');
        cvc='';
    }
    blank(input_Cvc, error_Cvc);
    

    //validar boton
    
    if(name && numero && month && year && cvc ){
        form.style.display = 'none';
        nodo.gracias.style.display= 'block';
    }

});
