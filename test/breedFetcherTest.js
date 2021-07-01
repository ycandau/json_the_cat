// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  // All good
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.isNull(err);

      const expectedDesc =
        'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';

      // compare returned description
      assert.equal(desc.trim(), expectedDesc);

      done();
    });
  });

  // Invalid breed
  it('returns a null description and non null error for an invalid breed', (done) => {
    fetchBreedDescription('Husky', (err, desc) => {
      assert.isNotNull(err);
      assert.equal(err, 'Invalid breed');
      assert.isNull(desc);
      done();
    });
  });
});
