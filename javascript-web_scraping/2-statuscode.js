#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
  console.log("Usage: node script.js <URL>");
  process.exit(1);
}

const url = process.argv[2];

request(url, (error, response) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
