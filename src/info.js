export default function info(data) {
    city.textContent = data.location.name;
    time.textContent = data.location.localtime;
    temp.textContent = data.current.temp_c + ' °'
    main.style.display = 'flex';

    // Features
    humidity.textContent = ' Umidita\': ' + data.current.humidity + '%';
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