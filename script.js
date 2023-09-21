const apiKey = '3d57896ece874c94ac1144657232009'
const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
let locationSearch = document.querySelector('#location')
let todayDate = document.querySelector('#date')
let todayWeather = document.querySelector('#information')
let todayPicture = document.querySelector("#weather-pic")
let tempClick = document.querySelector('#temperature')
let windClick = document.querySelector('#wind')
let humidityClick = document.querySelector('#humidity')
let uVClick = document.querySelector("#uv-Index")
let pressureClick = document.querySelector("#Pressure")
let lastUpdated = document.querySelector("#last-update")

button.addEventListener('click', async () => {
    let weatherInput = input.value
    
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${weatherInput}&aqi=no`)
    console.log(response)

    let cityLocation = `${response.data.location.name}, ${response.data.location.region}, ${response.data.location.country}`
    locationSearch.innerText = cityLocation

    let cityDateTime = `${response.data.location.localtime}`
    todayDate.innerText = cityDateTime

    let cityWeather = `${response.data.current.temp_c} °C`
    todayWeather.innerText = cityWeather

    let picWeather = response.data.current.condition.icon
    document.getElementById("weather-pic").src=`${picWeather}`

    let lastUpdate = response.data.current.last_updated
    lastUpdated.innerText = `Last update: ${lastUpdate}`


    tempClick.addEventListener('click', async () => {
        let cityWeather = `${response.data.current.temp_c} °C`
        todayWeather.innerText = cityWeather
    })

    windClick.addEventListener('click', async () => {
        let cityWind = `${response.data.current.wind_kph}kph,  ${response.data.current.wind_dir}`
        todayWeather.innerText = cityWind
    })

    humidityClick.addEventListener('click', async () => {
        let cityHumidex =  `${response.data.current.humidity}g/kg`
        todayWeather.innerText = cityHumidex
    })

    uVClick.addEventListener('click', async () => {
        let cityUV =  `${response.data.current.uv}`
        todayWeather.innerText = cityUV
    })

    pressureClick.addEventListener('click', async () => {
        let cityPressure =  `${response.data.current.pressure_in}`
        todayWeather.innerText = cityPressure
    })



})