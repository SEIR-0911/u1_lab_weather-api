const apiKey = '3d57896ece874c94ac1144657232009'
const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
let cityName = document.querySelector('#cityName')
let cityTemp = document.querySelector('#temp')
let cityTime = document.querySelector('#cityTime')
let cityHumidity = document.querySelector('#humidity')
let citySky = document.querySelector('#sky')
let cityWind = document.querySelector('#wind')
let tempChange = document.querySelector('#celFer')
let windChange = document.querySelector('#mph')

button.addEventListener('click', async () => {
    let weatherInput = input.value
    console.log(weatherInput)

    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${weatherInput}&aqi=no`)
    console.log(response)

    let cityLocation = `${response.data.location.name}, ${response.data.location.region}, ${response.data.location.country}`
    cityName.innerText = cityLocation

    let cityDateTime = `${response.data.location.localtime}`
    cityTime.innerText = cityDateTime

    let cityWeather = `${response.data.current.temp_c} Degrees Celcius`
    cityTemp.innerText = cityWeather

    let cityHumidex =  `Humidity: ${response.data.current.humidity}`
    cityHumidity.innerText = cityHumidex

    let citySkyWeather = `It's ${response.data.current.condition.text} outside`
    citySky.innerText = citySkyWeather

    let CityWindKM = `The wind is ${response.data.current.wind_kph}kph`
    cityWind.innerText = CityWindKM

    windChange.addEventListener('click', async () => {
        if (windChange.innerText === 'MPH') {
        let CityWindKM = `The wind is ${response.data.current.wind_mph}mph`
        cityWind.innerText = CityWindKM
        windChange.innerText = 'KPH'
        } else {
        (windChange.innerText === 'MPH') 
        let CityWindKM = `The wind is ${response.data.current.wind_kph}kph`
        cityWind.innerText = CityWindKM
        windChange.innerText = 'MPH'
        }

    })
    
    
    tempChange.addEventListener('click', async () => {
        if (tempChange.innerText === 'F') {
            let cityWeather = `${response.data.current.temp_f} Degrees Ferheeneneheit`
            cityTemp.innerText = cityWeather
            tempChange.innerText = 'C'
        } else {
            let cityWeather = `${response.data.current.temp_c} Degrees Celcius`
            cityTemp.innerText = cityWeather
            tempChange.innerText = 'F'
        }
    })
    

})


//animations
// @keyframes wind{
//     0% {
//       background-position: 0 200px, 0 300px, 100px 250px;
//     }
//     50% {
//       background-position: -1000px -200px, -1200px -300px,-1100px -250px;
//     }
//     100% {
//       background-position: 1000px 200px, 1200px 300px, 1100px 250px;
//     }
  
//   }