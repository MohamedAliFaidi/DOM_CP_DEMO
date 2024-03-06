function inc(id) {
  this.items[id]["quantity"]++;
}

function dec(id) {
  this.items[id]["quantity"]--;
}

function total_price() {
  var result = 0;
  for (var i = 0; i < this.items.length; i++) {
    result += this.items[i]["price"] * this.items[i]["quantity"];
  }
  return result;
}

function Cart() {
  return {
    items: [
      {
        id: 1,
        name: "Nike 2019",
        price: 259,
        like: false,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 2,
        name: "Adidas 2019",
        price: 359,
        like: false,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
      },
    ],
    total_price: total_price,
    inc: inc,
    dec: dec,
  };
}




var model= Cart()

console.log(model)