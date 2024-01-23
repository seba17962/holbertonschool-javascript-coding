#!/usr/bin/node
const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.log('Usage: node script.js <API_URL> FilePath');
  process.exit(1);
}

const apiUrl = process.argv[2];
const filePath = process.argv[3];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    fs.writeFileSync(filePath, body, 'utf-8', (error) => {
      if (error) {
        console.error(error);
      }
    });
  }
});
