const request = require("request");

const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (err, response, body) => {
    if (err) {
      callback(err, body);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg, null));
      return;
    }
    let ipObject = JSON.parse(body);
    callback(err, ipObject.ip);
    return;
  });
};
// fetchMyIP(input => console.log(input)); // test to ensure function works

const fetchCoordsByIP = function(ip, callback) {
  request("http://ipwho.is/" + ip, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (request.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching Coords. Response: ${body}`;
      callback(msg, null);
      return;
    }
    if (!JSON.parse(body).success) {
      callback(`Error: Success status was false. Server message says: Invalid IP address when fetching for IP ${ip}.`, null);
      return;
    }
    let coord = {};
    coord.latitude =  JSON.parse(body).latitude;
    coord.longitude =  JSON.parse(body).longitude;
    callback(err, coord);
    return;
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (request.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS flyover times. Response: ${body}`;
      callback(msg, null);
      return;
    }
    let result = JSON.parse(body);
    if (result.message !== "success") {
      callback(`Error: ${result} fetching ISS flyover time. Response: ${body}`, null);
    }
    callback(err, result.response);
    return;
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };