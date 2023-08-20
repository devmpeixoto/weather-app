// Chave API

const apiKey = "7b542a0943b075f3ee29f02c9020e469";

// selecionar itens HTML
const inputValue = document.getElementById('search-input');
const searchBtn = document.querySelector('.btn-search');
const imgEl = document.querySelector('.weather-icon');


// variavel para guardar pesquisa
let inputData = "";

document.querySelector('.weather').style.display = 'none'

async function checkWeather() {
    inputData = inputValue.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        const data = await response.json();

        if (data.weather[0].main === 'Clear') {
            imgEl.src = 'assets/img/Clear.png'
        } else if (data.weather[0].main === 'Clouds') {
            imgEl.src = 'assets/img/clouds.png';
        } else if (data.weather[0].main === 'Drizzle') {
            imgEl.src = 'assets/img/Drizzle.png';
        } else if (data.weather[0].main === 'Humidity') {
            imgEl.src = 'assets/img/Humidity.png';
        } else if (data.weather[0].main === 'Mist') {
            imgEl.src = 'assets/img/Mist.png';
        } else if (data.weather[0].main === 'Rain') {
            imgEl.src = 'assets/img/Rain.png';
        } else if (data.weather[0].main === 'Search') {
            imgEl.src = 'assets/img/Search.png';
        } else if (data.weather[0].main === 'Snow') {
            imgEl.src = 'assets/img/Snow.png';
        } else if (data.weather[0].main === 'Wind') {
            imgEl.src = 'assets/img/Wind.png';
        }

        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°c`;
        document.querySelector('.city').innerHTML = `${data.name}`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`

        document.querySelector('.error').style.display = 'none'
        document.querySelector('.weather').style.display = 'block'
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather()
})
inputValue.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault
        checkWeather()
    }
})