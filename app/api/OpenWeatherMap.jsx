var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=0a2eb80c7d101018143bee3ca150a180&units=imperial';

//0a2eb80c7d101018143bee3ca150a180

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.mesage){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
