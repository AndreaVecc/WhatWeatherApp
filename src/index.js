import './style.css';
import info from './info';

const input = document.querySelector('input');
const btn = document.querySelector('button');
const city = document.querySelector('#city');
const time = document.querySelector('#time');
const temp = document.querySelector('#temp');
const main = document.querySelector('#main');
const humidity = document.querySelector('#humidity');
const gust = document.querySelector('#gust');
const pression = document.querySelector('#pression');
const overcast = document.querySelector('#overcast'); 

// ICONS

const sun = document.querySelector('#sun');
const cloud = document.querySelector('#cloud');
const clear = document.querySelector('#clear');
const rain = document.querySelector('#rain');

window.addEventListener('load', () => {   // Al caricamento della pagina esegue lo script che restituisce le info sulla position corrente
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            fetch(`https://api.weatherapi.com/v1/current.json?key=7ec877ac8fcd40be90502612200609&q=${lat},${long}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                info(data);
            }).catch((err) => console('Qualcosa e\' andato storto'))
        })
    }
    
})

btn.addEventListener('click', () => {

    fetch('https://api.weatherapi.com/v1/current.json?key=7ec877ac8fcd40be90502612200609&q='+ input.value)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        info(data);
        input.value = '';
    })
    .catch((error) => {
        console.error('Errore');
    })
    
})