const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didnt't work!", error);
    return;
  }
  console.log('It worked! Return IP:', ip); // Reminder, it knows its not an error because the variable is a falsy
});