console.log ('hi')
const apiKey = '11aa7268a9dc4fffbb0153846232009'
const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput').value



button.addEventListener('click', async () => {
    let input = textInput.value
    let city = document.querySelector('#cityName')
    let display = document.querySelector('#temp')



    let response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=11aa7268a9dc4fffbb0153846232009&q=${input}&aqi=no`
    )
    let temp = response.data.current.temp_f
      let cityName = response.data.location.name


      console.log(response)


    city.innerHTML = `location: ${cityName}`
    display.innerHTML = `current temp: ${temp}`
  })






  

  