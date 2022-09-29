const request = require("request");

request('https://api.thecatapi.com/v1/breeds/search?q=turkish%20van', (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  const breedInfo = JSON.parse(body);
  console.log(breedInfo);
})

