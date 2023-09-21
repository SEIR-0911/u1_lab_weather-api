




const button = document.querySelector('#submitButton')


button.addEventListener('click', async() =>{


const input = document.querySelector('#textInput').value

let citySearch = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0df0b4e0dd084a83914145853232009&q=${input}&aqi=no`)



let temp = citySearch.data.current.temp_f
let humidity = citySearch.data.current.humidity
let wind = citySearch.data.current.wind_mph
// let cloud = citySearch.data.current.cloud
 
const temp2 = document.querySelector("#temp2")
const humidity2 = document.querySelector('#humidity2')
const wind2 = document.querySelector('#wind2')
// const cloud2 = document.querySelectorAll('#cloud2')


temp2.innerHTML = temp;
humidity2.innerHTML = humidity;
wind2.innerHTML = wind;
// cloud2.innerHTML = cloud;



} )