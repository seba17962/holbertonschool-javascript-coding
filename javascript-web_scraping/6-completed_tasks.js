#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  }

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
});