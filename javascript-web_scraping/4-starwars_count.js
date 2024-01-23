#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
  console.log('Usage: node script.js <API_URL>');
  process.exit(1);
}

const apiURL = process.argv[2];

request.get(apiURL, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    let wedgeCount = 0;
    const data = JSON.parse(body).results;

    data.forEach((elem) => {
      if (elem.characters.find((e) => e.search('18') !== -1)) { wedgeCount++; }
    });

    console.log(wedgeCount);
  }
})