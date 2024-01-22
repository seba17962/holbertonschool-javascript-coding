#!/usr/bin/node
const axios = require('axios');
const { error } = require('console');

if (process.argv.length !== 3) {
  console.log('Usage: node script.js URL');
  process.exit(1);
}

const urlPath = process.argv[2]

axios.get(urlPath)
  .catch(error => {
    console.log(error.message);
  })