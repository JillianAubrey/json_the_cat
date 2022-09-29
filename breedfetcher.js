const request = require("request");
const query = process.argv.slice(2).join('%20');

console.log(query);

request('https://api.thecatapi.com/v1/breeds/search?q=' + query, (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  const breedInfo = JSON.parse(body);
  if (breedInfo.length === 0) {
    return console.log("Hmmm, can't seem to find any breed matching that in the database.")
  }
  console.log(breedInfo);
})

