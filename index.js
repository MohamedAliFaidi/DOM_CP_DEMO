const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(`What's your name?
 `,function(name) {
  console.log(`Hi ${name}!`);
  readline.close();
});


const fs = require('fs');

// Read the JSON file
fs.readFile('data.json', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parse the JSON data
  console.log(data)
  const products = JSON.parse(data);

  // Now you can work with the products data as a JavaScript object
  console.log(products);

  // Example: Iterate through each product and log its name
  products.forEach(product => {
    console.log(product.name);
  });
});
