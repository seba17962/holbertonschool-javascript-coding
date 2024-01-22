#!/usr/bin/node

if (process.argv.length !== 3) {
    console.log("Usage: node script.js <URL>");
    process.exit(1);
}

const url = process.argv[2];

request.get(url, (error, response) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});
