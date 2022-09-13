const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didnt't work!", error);
    return;
  }
  console.log('It worked! Return IP:', ip); // Reminder, it knows its not an error because the variable is a falsy
});

// fetchCoordsByIP("149.248.184.59", (error, coordinates) => {
//   if (error) {
//     console.log("It didnt't work!", error);
//     return;
//   }
//   console.log('It worked! Return IP:', coordinates); // Reminder, it knows its not an error because the variable is a falsy
// });

// fetchISSFlyOverTimes({ latitude: 43.653226, longitude: -79.3831843 }, (error, coordinates) => {
//   if (error) {
//     console.log("It didnt't work!", error);
//     return;
//   }
//   console.log('It worked! Return IP:', coordinates); // Reminder, it knows its not an error because the variable is a falsy
// });