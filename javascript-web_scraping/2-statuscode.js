#!/usr/bin/node
const axios = require('axios');

if (process.argv.length !== 3) {
    console.log("Usage: node script.js <URL>");
    process.exit(1);
}

const url = process.argv[2];

axios
  .get(url, (error, response) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});
