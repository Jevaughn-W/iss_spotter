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

module.exports = { fetchMyIP };