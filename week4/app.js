const cityInput = document.getElementById('cityInput'); 
const searchButton = document.getElementById('btn'); 
const weatherInfoDiv = document.getElementById('weather-info'); 

const apiKey = '8d0f4299669cde8d419529aee1438296';

searchButton.addEventListener('click', async () => {
    const cityName = cityInput.value.trim();

    if (!cityName) {
        alert('Please enter a city name');
        return;
    }

    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(weatherApiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        
        updateWeatherInfo(data);

    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfoDiv.textContent = 'Could not retrieve the weather information for the city. Please try again.';
    }
});

function updateWeatherInfo(data) {
    const weatherDescription = data.weather[0].description;
    const mainTemperature = data.main.temp;
    const windSpeed = data.wind.speed;

    weatherInfoDiv.innerHTML = `
    <h2>Weather Details for ${data.name}</h2>
    <p>The weather in ${data.name} is described as ${weatherDescription}. 
    The temperature is ${mainTemperature} degrees Celsius, with a wind speed of ${windSpeed} meters per second.</p>
`;

}
