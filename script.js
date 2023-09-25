

const apiKey = 'ac63b971a3e747efbb2145847232009';
const button = document.querySelector('#submitButton');
const input = document.querySelector('#textInput');

//got this function from stack overflow
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);


button.addEventListener("click", async () => {
  const userCity = input.value;

  

//   userCity = capitalizeFirstLetter(userCity);



  const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userCity}&aqi=no`);
  const weatherData = response.data;
  console.log(weatherData);
  console.log(weatherData.current.temp_f)

  //showing the information
  document.getElementById('cityName').textContent = `City: ${userCity}, ${weatherData.location.region}, ${weatherData.location.country}`;
  document.getElementById('tempDisplay').textContent = `Temperature: ${weatherData.current.temp_f}°F`;


});

