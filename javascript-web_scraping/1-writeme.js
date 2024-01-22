#!/usr/bin/node
const fs = require('fs')

if (process.argv.length !== 4) {
  console.log('Usage: node script.js <file_path> "file content"');
  process.exit(1);
}

const filePath = process.argv[2];
const fileContent = process.argv[3];

fs.writeFile(filePath, fileContent, 'utf-8', (error) => {
  if (error) {
    console.error('Error writing to the file:', error)
  }
});
