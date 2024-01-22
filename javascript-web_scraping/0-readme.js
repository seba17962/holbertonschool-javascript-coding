#!/usr/bin/node
const fs = require('fs');

if (process.argv.length !== 3) {
  console.log('Usage: node script.js <file_path>');
  process.exit(1);
}

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (error, content) => {
  if (error) {
    console.error('Error during the reading:', error);
  } else {
    console.log(content);
  }
});
