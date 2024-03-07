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
  console.log(req.url);
  switch (req.url) {
    case "/test":
      res.writeHead(200, {
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ message: "this is a test request" }));
      break;

    case "/getone":
      console.log(req.headers.id)
      let = products = [];
      fs.readFile("data.json", async (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          return;
        }
        // Parse the JSON data
        products = await JSON.parse(data);

        const one = products.filter((e) => {
          return e.id == req.headers.id;
        });

        // Now you can work with the products data as a JavaScript object
        res.writeHead(200, {
          "Access-Control-Allow-Origin": "http://127.0.0.1:5500",

          "Content-Type": "application/json",
        });

        res.end(JSON.stringify(one));
      });
         break;
    default:
      let = products = [];
      fs.readFile("data.json", async (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          return;
        }
        // Parse the JSON data
        products = await JSON.parse(data);

        // Now you can work with the products data as a JavaScript object
        res.writeHead(200, {
          "Access-Control-Allow-Origin": "http://127.0.0.1:5500",

          "Content-Type": "application/json",
        });

        res.end(JSON.stringify(products));
      });
      break;
  }

  // Send the response body "Hello World"
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
