const request = require('request');

const readInput = () => process.argv.slice(2);

const formQuery = (breed) =>
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const getBreedInfo = (breed = 'Siberian') => {
  const url = formQuery(breed);
  request(url, (error, response, body) => {
    // Request fails
    if (error) return console.log(error);

    // Check if breed is found
    const firstCat = JSON.parse(body)[0];
    if (!firstCat) return console.log('Breed not found');

    // All good
    console.log(firstCat.description);
  });
};

const breed = readInput()[0];
getBreedInfo(breed);
