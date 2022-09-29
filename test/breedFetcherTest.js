const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "🐈🐈🐈\nBreed: Siberian\nDescription: The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.\n🐈🐈🐈";
      assert.equal(expectedDesc, desc);
      done();
    });
  });
  it('returns multiple descriptions if the query hit mutliple breeds, via callback', (done) => {
    fetchBreedDescription('Turkish', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "\n🐈🐈🐈\nBreed: Turkish Angora\nDescription: This is a smart and intelligent cat which bonds well with humans. With its affectionate and playful personality the Angora is a top choice for families. The Angora gets along great with other pets in the home, but it will make clear who is in charge, and who the house belongs to\n🐈🐈🐈\nBreed: Turkish Van\nDescription: While the Turkish Van loves to jump and climb, play with toys, retrieve and play chase, she is is big and ungainly; this is one cat who doesn’t always land on his feet. While not much of a lap cat, the Van will be happy to cuddle next to you and sleep in your bed.\n🐈🐈🐈";
      assert.equal(expectedDesc.trim(), desc.trim());
      done();
    });
  });
  it('returns a string description for a valid breed with more than one word, via callback', (done) => {
    fetchBreedDescription('Turkish Angora', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "\n🐈🐈🐈\nBreed: Turkish Angora\nDescription: This is a smart and intelligent cat which bonds well with humans. With its affectionate and playful personality the Angora is a top choice for families. The Angora gets along great with other pets in the home, but it will make clear who is in charge, and who the house belongs to\n🐈🐈🐈";
      assert.equal(expectedDesc.trim(), desc.trim());
      done();
    });
  });
  it('returns an error for an ivalid breed, via callback', (done) => {
    fetchBreedDescription('Dalmation', (err, desc) => {
      assert.isOk(err);
      assert.equal(desc, null);
      done();
    });
  });
});