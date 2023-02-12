import './style.scss';
import './desktop.scss';
import SuperExpressive from 'super-expressive';

import * as nodo from './nodos.js';

//regex y manejador de eventos

let number = SuperExpressive().allowMultipleMatches.digit.toRegex();
let correctname = true;
let correctnumber = true;
let correctmes = true;
let correctano = true;
let correctcvc = true;

nodo.nameInput.addEventListener('input', ()=>{
    (nodo.nameInput.value=== '')?
        nodo.nameCard.textContent = 'JANE APPLESEED'
        : nodo.nameCard.textContent = nodo.nameInput.value;
    if(nodo.nameInput.value.match(number) !== null){
        nodo.nameError.textContent = 'Wrong format, characters only';
        nodo.nameInput.classList.add('cardholder');
        nodo.nameError.classList.remove('error');     
    }else{
        nodo.nameInput.classList.remove('cardholder');
        nodo.nameError.classList.add('error');
    }
});



//regex y manejador de eventos

let caracteres = /[A-z]/g;
let add = /([0-9]{4})/g; //grupo de 4 numeros 
let space = SuperExpressive().whitespaceChar.allowMultipleMatches.toRegex();

nodo.numberInput.addEventListener('input',(event)=>{
    let input = event.target.value;//seleciono texto escrito
    
    if(nodo.numberInput.value.match(caracteres) !== null){
        nodo.numberError.textContent = 'Wrong format, numbers only';
        nodo.numberInput.classList.add('cardholder');
        nodo.numberError.classList.remove('error');
    }else{
        nodo.numberInput.value = input.replace(space, '').replace(add, '$1 ').trim();//$1 es la subcadana representada en el regex 
        nodo.numberInput.classList.remove('cardholder');
        nodo.numberError.classList.add('error');
    }
    (nodo.numberInput.value === '')? nodo.numberCard.textContent = '0000 0000 0000 0000': nodo.numberCard.textContent = nodo.numberInput.value;
});



//regex y manejador de eventos

nodo.inputmonth.addEventListener('input', ()=>{
    (nodo.inputmonth.value === '')? nodo.cardmonth.textContent = '00' : nodo.cardmonth.textContent = nodo.inputmonth.value;
    if(nodo.inputmonth.value.match(caracteres) !== null){
        nodo.montherror.textContent = 'Wrong format';
        nodo.inputmonth.classList.add('cardholder');
        nodo.montherror.classList.remove('error');
    }else{
        nodo.inputmonth.classList.remove('cardholder');
        nodo.montherror.classList.add('error');
    }
});



nodo.inputCard.addEventListener('input', ()=>{
    (nodo.inputCard.value === '')? nodo.cardyear.textContent = '00' : nodo.cardyear.textContent = nodo.inputCard.value;
    if(nodo.inputCard.value.match(caracteres) !== null){
        nodo.errorYear.textContent = 'Wrong format';
        nodo.inputCard.classList.add('cardholder');
        nodo.errorYear.classList.remove('error');
    }else{
        nodo.inputCard.classList.remove('cardholder');
        nodo.errorYear.classList.add('error');
    }
});




nodo.input_Cvc.addEventListener('input',()=>{
    (nodo.input_Cvc.value === '')? nodo.cvc_Card.textContent = '000' : nodo.cvc_Card.textContent = nodo.input_Cvc.value;
    if(nodo.input_Cvc.value.match(caracteres) !== null){
        nodo.error_Cvc.textContent = 'Wrong format';
        nodo.input_Cvc.classList.add('cardholder');
        nodo.error_Cvc.classList.remove('error');
    }else{
        nodo.input_Cvc.classList.remove('cardholder');
        nodo.error_Cvc.classList.add('error');
    }
});


//validacion de envio de datos



nodo.confirm.addEventListener('click', (event)=>{
    event.preventDefault();
    //validando nombre
    if(nodo.nameInput.value=== '' ){
        nodo.nameError.textContent = `Can't be blank`;
        nodo.nameInput.classList.add('cardholder');
        nodo.nameError.classList.remove('error');
        correctname = false;
    }
    
    //validando numero
    if(nodo.numberInput.value === ''){
        nodo.numberError.textContent = `Can't be blank`;
        nodo.numberInput.classList.add('cardholder');
        nodo.numberError.classList.remove('error');
        correctnumber = false;
    }else if(nodo.numberInput.value.length < 19){
        nodo.numberError.textContent = 'Wrong number';
        nodo.numberInput.classList.add('cardholder');
        nodo.numberError.classList.remove('error');
        correctnumber = false;
    }
    //valido mes
    if(parseInt(nodo.inputmonth.value) === 0 || parseInt(nodo.inputmonth.value) > 12){
        nodo.montherror.textContent = 'Wrong Month';
        nodo.inputmonth.classList.add('cardholder');
        nodo.montherror.classList.remove('error');
        correctmes=false;
    }
    if(nodo.inputmonth.value=== ''){
        nodo.montherror.textContent = `Can't be blank`;
        nodo.inputmonth.classList.add('cardholder');
        nodo.montherror.classList.remove('error');
        correctmes = false;
    }
    //valido año
    if(parseInt(nodo.inputCard.value)<23 || parseInt(nodo.inputCard.value)>=28){
        nodo.errorYear.textContent = 'Wrong year';
        nodo.inputCard.classList.add('cardholder');
        nodo.errorYear.classList.remove('error');
        correctano = false;
    }
    if(parseInt(nodo.inputCard.value) === 0) {
        nodo.errorYear.textContent = 'Wrong year';
        nodo.inputCard.classList.add('cardholder');
        nodo.errorYear.classList.remove('error');
        correctano = false;
    }
    if(nodo.inputCard.value === ''){
        nodo.errorYear.textContent = `Can't be blank`;
        nodo.inputCard.classList.add('cardholder');
        nodo.errorYear.classList.remove('error');
        correctano = false;
    }
    //valido cvc
    if(parseInt(nodo.input_Cvc.value)===0 || parseInt(nodo.input_Cvc.value) <= 3){
        nodo.error_Cvc.textContent = 'Wrong CVC';
        nodo.input_Cvc.classList.add('cardholder');
        nodo.error_Cvc.classList.remove('error');
        correctcvc = false;
    }
    if(nodo.input_Cvc.value === ''){
        nodo.error_Cvc.textContent = `Can't be blank`;
        nodo.input_Cvc.classList.add('cardholder');
        nodo.error_Cvc.classList.remove('error');
        correctcvc = false;
    }
    
    //validar boton

    if(correctano === true && correctcvc === true && correctmes === true && correctname === true && correctnumber === true){
        nodo.form.style.display = 'none';
        nodo.gracias.style.display= 'block';
    }

});
