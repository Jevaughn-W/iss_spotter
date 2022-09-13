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

const fetchCoordsByIP = function (ip, callback) {
  request("http://ipwho.is/" + ip, (err, request, body) => {
  if (err) {
    callback(err, null)
    return;
    }
  if (request.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg, null));
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

module.exports = { fetchMyIP, fetchCoordsByIP };