const apiKey = ('662793df336d46f09b8145929232009')
const button = document.querySelector("#submitButton")
const input = document.querySelector("#textInput")
const cityNameElement = document.querySelector("#cityName")
const temperatureElement = document.querySelector("#temperature")
const weatherText = document.querySelector("#weatherText")

button.addEventListener("click", () => {
    const city = input.value
    
if (location) {
        
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`

    axios.get(apiUrl)
        .then((response) => {
               
            const data = response.data
            const city = data.location.name
            const temperature = data.current.temp_f

        cityNameElement.textContent = `City: ${city}`
        temperatureElement.textContent = `Temperature: ${temperature}°F`

        console.log(cityNameElement)

    let weatherText = response.data.current.condition.text
    console.log(weatherText)
    pictureTitle.innerHTML = weatherText
    
})

            .catch((error) => {
                console.error("Yep!! You broke it!:", error)
            })

    } else {
        alert("What City is that??")
    }
});
