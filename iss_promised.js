const request = require('request-promise-native');

const fetchMyIP = function() {
  let result;
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request("http://ipwho.is/" + ip );
};

const fetchISSFlyOverTimes = function(body) {
const { latitude, longitude } = JSON.parse(body);
return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((body) => {
    const { response } = JSON.parse(body)
    return response
  });
};

module.exports = { nextISSTimesForMyLocation };