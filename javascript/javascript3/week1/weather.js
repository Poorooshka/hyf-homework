
const key = "292904a6c1f6b0a5751001db4d88c6fc"


const button = document.getElementById("btn");
button.addEventListener("click", getCityName);

function getCityName() {
    const inputCityName = document.getElementById("input_element")
    const cityName = inputCityName.value;
    console.log(cityName);
    if (cityName === "") {
        const needInput = document.getElementById("info_section");
        needInput.innerHTML = "Please enter a valid city name";
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&apikey=${key}`;

        fetch(url)
            .then((response) => response.json())
            .then((wData) => {
                console.log(wData);
                const temperature = document.getElementById("temp");
                temperature.innerHTML = `The Temperature in ${wData.name} is ${wData.main.temp} degrees Centigrade`;
                const weatherDescription = document.getElementById("description");
                weatherDescription.innerHTML = `We can see ${wData.weather[0].description}`;
                const imgsrc = `http://openweathermap.org/img/w/${wData.weather[0].icon}.png`;
                document.getElementById("icon").src = imgsrc;
                const windSpeed = document.getElementById("wind-speed");
                windSpeed.innerHTML = `Wind ${wData.wind.speed} meter/sec `;
                const clowdy = document.getElementById("clouds-per");
                clowdy.textContent = `Clouds ${wData.clouds.All} %`;
                const sunrise = document.getElementById("sunrise");
                sunrise.innerHTML = `Sunrise: ${getTime(wData.sys.sunrise)}`;
                const sunset = document.getElementById("sunset");
                sunset.innerHTML = `Sunset: ${getTime(wData.sys.sunset)}`;

            })
            .catch((err)=>{console.log('There is an error in fetching data')})

    }

}

function getTime(unix_timestamp) {
 // Create a new JavaScript Date object based on the timestamp 
 // multiplied by 1000 so that the argument is in milliseconds, not seconds. 
 let date = new Date(unix_timestamp*1000); 
 // Hours part from the timestamp 
 let hours = date.getHours(); 
 // Minutes part from the timestamp 
 let minutes = "0" + date.getMinutes(); 
// Seconds part from the timestamp 
let seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format 
let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

return formattedTime;
}


