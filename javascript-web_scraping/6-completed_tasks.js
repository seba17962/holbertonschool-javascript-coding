#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
  console.log('Usage: node script.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const resDic = {};
    const data = JSON.parse(body);
    data.forEach((task) => {
      if (task.completed) {
        typeof resDic[task.userId] === 'undefined'
          ? (resDic[task.userId] = 1)
          : (resDic[task.userId] += 1);
      }
    });

    console.log(resDic);
  }
});
