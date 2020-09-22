import './style.css';

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

function info(data) {
    city.textContent = data.location.name;
    time.textContent = data.location.localtime;
    temp.textContent = data.current.temp_c + ' °'
    main.style.display = 'flex';

    // Features
    humidity.textContent = 'Umidita\': ' + data.current.humidity + '%';
    gust.textContent = 'Velocita\' vento: ' + data.current.gust_kph + ' Km/h';
    pression.textContent = 'Pressone: ' + data.current.pressure_in + ' mbar';

    // Condition
    if (data.current.condition.text === 'Sunny' || data.current.condition.text === 'Clear') {
        clear.style.display = 'block';
        cloud.style.display = 'none';
        overcast.style.display = 'none';
        rain.style.display = 'none';
    } else if (data.current.condition.text === 'Partly cloudy') {
        clear.style.display = 'none';
        cloud.style.display = 'block';
        overcast.style.display = 'none';
        rain.style.display = 'none';
    } else if (data.current.condition.text === 'Overcast' || data.current.condition.text === 'Patchy rain possible') {
        clear.style.display = 'none';
        cloud.style.display = 'none';
        overcast.style.display = 'block';
        rain.style.display = 'none';
    } else if (data.current.condition.text === 'Moderate or heavy rain with thunder' || data.current.condition.text === 'Light rain' || data.current.condition.text === 'Moderate rain at times') {
        clear.style.display = 'none';
        cloud.style.display = 'none';
        overcast.style.display = 'none';
        rain.style.display = 'block';
    }
}