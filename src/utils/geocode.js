const axios = require('axios')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3VkZWVwbW9yZTkzIiwiYSI6ImNrYThucGpjcDBldDAzMG1renZwb2FwdXQifQ.rNuLly-i87rG0N90QR5vJg&limit=1'
    axios.get(url)
        .then(({ data }) => {
            callback(undefined, {
                latitude: data.features[0].center[1],
                longitude: data.features[0].center[0],
                location: data.features[0].place_name
            })
        })
        .catch(error => {
            callback('Unable to connect location services!', undefined)
        })
}

module.exports = geocode