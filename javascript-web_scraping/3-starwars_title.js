#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
  console.log('Usage: node script.js movie_ID');
  process.exit(1);
}

const movieId = process.argv[2];
const apiURL = 'https://swapi-api.hbtn.io/api/films/';

request.get(`${apiURL}${movieId}`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else{
    console.log(JSON.parse(body).title);
  }
})
