const axios = require('axios')

const forecast = (lat, lon, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=c06a3dfb3638127acfa21ec87e3bc7b5'

    axios.get(url)
        .then(({ data }) => {
            callback(undefined, `${data.weather[0].main} throughout the Day. It is currently ${data.main.temp} degrees out. The high today is ${data.main.temp_max} with a low of ${data.main.temp_min}`)
        })
        .catch(error => {
            callback("Unable to connect to weather service!", undefined)
        })
}

module.exports = forecast