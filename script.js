// script.js
document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    fetchWeatherData(city);
});

async function fetchWeatherData(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const response = await fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric);
    const data = await response.json();
    
    if (data.cod === 200) {
        updateWeatherInfo(data);
    } else {
        alert('City not found');
    }
}

function updateWeatherInfo(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = Temperature: ${data.main.temp}°C;
    document.getElementById('condition').textContent = Condition: ${data.weather[0].description};
    
    // Update background color based on weather condition
    const condition = data.weather[0].main.toLowerCase();
    if (condition.includes('cloud')) {
        document.body.style.backgroundColor = 'gray';
    } else if (condition.includes('rain')) {
        document.body.style.backgroundColor = 'lightblue';
    } else {
        document.body.style.backgroundColor = 'yellow';
    }
    
    // Display current time for the selected city
    const date = new Date();
    const options = { timeZone: data.timezone, hour: '2-digit', minute: '2-digit' };
    document.getElementById('currentTime').textContent = Current Time: ${date.toLocaleTimeString('en-US', options)};
}