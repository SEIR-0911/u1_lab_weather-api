//http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no

let button = document.querySelector("#searchButton");
let weatherP = document.querySelector("#weather-p")
const weatherDiv = document.createElement('div');


const apiKey = "456a0b3a2778440f950162849232009";
button.addEventListener('click', async () => {
    weatherDiv.innerHTML = ""

    let input = document.querySelector("#inputBar").value
    if (input) {

        const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.toLowerCase()}&aqi=no`)

        console.log(res.data);

        let name = res.data.location.name;
        let region = res.data.location.region;
        let country = res.data.location.country;
        let localtime = res.data.location.localtime;

        let condtionImg = res.data.current.condition.icon;
        let currentCondition = res.data.current.condition.text;

        let temp_f = res.data.current.temp_f;
        let temp_c = res.data.current.temp_c;

        let wind_dir = res.data.current.wind_dir;
        let wind_kph = res.data.current.wind_kph;
        let wind_mph = res.data.current.wind_mph;

        let uvIndex = res.data.current.uv
        let lastUpdate = res.data.current.last_updated;

        weatherDiv.setAttribute("id", "weather-data");
        weatherDiv.innerHTML += `<h3>Results for ${name} in ${region}</h3><h4>Country: ${country}</h4>`
        weatherDiv.innerHTML += `<p>Local time: ${localtime}`
        weatherDiv.innerHTML += `<img class="icon" src="${condtionImg}"/>`
        weatherDiv.innerHTML += `<p>${currentCondition}</p>`
        weatherDiv.innerHTML += `Temperature ${temp_c}˚C / ${temp_f}˚F<br/>`
        weatherDiv.innerHTML += `Wind ${wind_dir} ${wind_kph}kph ${wind_mph}mph<br/>`
        weatherDiv.innerHTML += `UV Index: ${uvIndex}<br/>`
        weatherDiv.innerHTML += `last updated ${lastUpdate}<br/>`
        weatherDiv.innerHTML += `</p>`

        weatherP.append(weatherDiv);
    } else {
        weatherDiv.removeAttribute("id", "weather-data");
    }
});


//if (input) {
// console.log("not empty")
// const p = document.createElement('p');
// p.setAttribute("class", "weather-data-style");
// console.log(p)
// weatherDiv.append(p)
// console.log(weatherDiv)