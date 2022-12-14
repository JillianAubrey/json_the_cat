const request = require("request");

const fetchBreedDescription = function(query, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + query, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    if (response.statusCode !== 200) {
      return callback(new Error(response.statusCode + ' ' + response.statusMessage));
    }

    const breedInfo = JSON.parse(body);
    if (breedInfo.length === 0) {
      return callback(new Error('No matching breed found.'));
    }

    let returnString = 'ššš';
    breedInfo.forEach((breed) => {
      returnString += `\nBreed: ${breed.name.trim()}`;
      returnString += `\nDescription: ${breed.description.trim()}`;
      returnString += '\nššš';
    });
    return callback(null, returnString);
  });
};

module.exports = { fetchBreedDescription };