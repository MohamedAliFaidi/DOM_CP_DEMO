// const readline = require('node:readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.question(`What's your name?
//  `,function(name) {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });

const fs = require("fs");

// Read the JSON file

const http = require("http");

const server = http.createServer((req, res) => {
  let = products = [];
  fs.readFile("data.json", async (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    // Parse the JSON data
    products = await JSON.parse(data);

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    });

    res.end(JSON.stringify(products));
    // Now you can work with the products data as a JavaScript object
  });

  // Send the response body "Hello World"
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
