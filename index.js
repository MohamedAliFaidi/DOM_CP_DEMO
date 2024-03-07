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
async function getAll() {
  return fs.readFile("data.json", async (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    let products = await JSON.parse(data);
    console.log(products)
    return products;
  });
}


const http = require("http");

const server = http.createServer(async (req, res) => {
  const products = await getAll() 
  console.log(products)
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  console.log(req.url);
  switch (req.url) {
    case "/test":
      res
        .writeHead(200)
        .end(JSON.stringify({ message: "this is a test request" }));
      break;

    case "/getone":
      {
        console.log(req.headers.id);

        // Parse the JSON data
        let products = await getAll();
        console.log(products);
        res.writeHead(200).end(JSON.stringify(products));
      }
      // Now you can work with the products data as a JavaScript object
      break;
    default:
      let products = getAll();

      // Now you can work with the products data as a JavaScript object
      res.writeHead(200).end(JSON.stringify(products));

      break;
  }

  // Send the response body "Hello World"
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
