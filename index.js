const { fetchBreedDescription } = require('./breedFetcher');
const query = process.argv.slice(2).join('%20');

fetchBreedDescription(query, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});