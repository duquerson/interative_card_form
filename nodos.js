//nombre de la tarjeta 

export let nameCard = document.querySelector('.card__details--name');
export let nameInput = document.querySelector('#cardholder');
export let nameError = document.querySelector('.errorName');

//numero de la tarjeta

export let numberCard = document.querySelector('.card__front--number');
export let numberInput = document.querySelector('#cardnumber');
export let numberError = document.querySelector('.errorNumber');

//mes tarjeta

export let cardmonth = document.querySelector('.card__month');
export let inputmonth = document.querySelector('#cardmonth');
export let montherror = document.querySelector('.errorMonth');

//año tarjeta

export let cardyear = document.querySelector('.card__year');
export let inputCard = document.querySelector('#cardyear');
export let errorYear = document.querySelector('.errorYear');

//cvc tarjeta

export let cvc_Card = document.querySelector('.card__back--cvc');
export let input_Cvc = document.querySelector('#cardcvc');
export let error_Cvc = document.querySelector('.errorCvc');

//seciciones finales

export let confirm = document.querySelector('.form__submit');
export let form = document.querySelector('.form');
export let gracias = document.querySelector('.completed');



export * as nodo from './nodos.js';





