const request = require('request');

const fetchBreedDescription = (breedName = 'Siberian', callback) => {
  // Form query
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // Request fails
    if (error) return callback(error, null);

    // Invalid breed
    const firstCat = JSON.parse(body)[0];
    if (!firstCat) return callback('Invalid breed', null);

    // All good
    return callback(null, firstCat.description);
  });
};

module.exports = { fetchBreedDescription };
