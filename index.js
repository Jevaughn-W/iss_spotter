const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didnt work!", error);
  }
  passTimes.forEach((x) => {
    let date = new Date(x.risetime * 1000); // converts time stamp to a readable version
    console.log(`Next pass at ${date} for ${x.duration} seconds!`);
  });
});