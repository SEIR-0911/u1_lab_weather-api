// app.js (No changes in JavaScript)

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector("#searchButton");
    const cityName = document.querySelector("#cityName");
    const weatherDescription = document.querySelector("#weatherDescription");
    const temperature = document.querySelector("#temperature");
    const humidity = document.querySelector("#humidity");
    const windSpeed = document.querySelector("#windSpeed");
    const pressure = document.querySelector("#pressure");
    const weatherImage = document.querySelector("#weatherImage");
    const inputBar = document.querySelector("#inputBar");

    searchButton.addEventListener('click', async () => {
        const cityNameValue = inputBar.value.trim();

        if (cityNameValue) {
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=5a47f7f8440240dc83a145817232009&q=${cityNameValue}&aqi=no`);
                const data = response.data;

                cityName.textContent = data.location.name;
                weatherDescription.textContent = data.current.condition.text;
                temperature.textContent = data.current.temp_c;
                humidity.textContent = data.current.humidity;
                windSpeed.textContent = data.current.wind_kph;
                pressure.textContent = data.current.pressure_mb;

                // Set the image source from the API
                weatherImage.src = `https:${data.current.condition.icon}`;
            } catch (error) {
                console.error("Error fetching data:", error);
                clearWeatherData();
            }
        }
    });

    function clearWeatherData() {
        cityName.textContent = "";
        weatherDescription.textContent = "";
        temperature.textContent = "";
        humidity.textContent = "";
        windSpeed.textContent = "";
        pressure.textContent = "";
        weatherImage.src = "";
    }
});
