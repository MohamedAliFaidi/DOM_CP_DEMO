function Cart() {
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
  var Data = {
    items: [
      {
        id: 1,
        name: "Nike 2019",
        price: 259,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 2,
        name: "Adidas 2019",
        price: 359,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
      },
    ],

    total_price: total_price,
    inc: inc,
    dec: dec,
  };
  document.getElementById("nike-img").src = Data["items"][0]["image"];
  document.getElementById("adidas-img").src = Data["items"][1]["image"];
  document.getElementById("nike-name").innerHTML = Data["items"][0]["name"];
  document.getElementById("adidas-name").innerHTML = Data["items"][1]["name"];
  document.getElementById("nike-quantity").value = Data["items"][0]["quantity"];
  document.getElementById("adidas-quantity").value =
    Data["items"][1]["quantity"];
  document.getElementById("nike-price").innerHTML = Data["items"][0]["price"];
  document.getElementById("adidas-price").innerHTML = Data["items"][1]["price"];

  var nikeQuantityPlus = document.getElementById("nike-plus");
  nikeQuantityPlus.addEventListener("click", function () {
    Data.inc(0);
    document.getElementById("nike-quantity").value =
      Data["items"][0]["quantity"];
    document.getElementById("nike-total-price").innerHTML =
      Data["items"][0]["price"] * Data["items"][0]["quantity"];
  });
  var nikeQuantityMinus = document.getElementById("nike-minus");
  nikeQuantityMinus.addEventListener("click", function () {
    if (Data.items[0]["quantity"] == 1) {
      alert("quantity can only take postif value");
      return;
    }
    Data.dec(0);
    document.getElementById("nike-quantity").value =
      Data["items"][0]["quantity"];
    document.getElementById("nike-total-price").innerHTML =
      Data["items"][0]["price"] * Data["items"][0]["quantity"];
  });

  var adidasQuantityPlus = document.getElementById("adidas-plus");
  adidasQuantityPlus.addEventListener("click", function () {
    Data.inc(1);
    document.getElementById("adidas-quantity").value =
      Data["items"][1]["quantity"];
    document.getElementById("adidas-total-price").innerHTML =
      Data["items"][1]["price"] * Data["items"][1]["quantity"];
  });
  var adidasQuantityMinus = document.getElementById("adidas-minus");
  adidasQuantityMinus.addEventListener("click", function () {
    if (Data.items[1]["quantity"] == 1) {
      alert("quantity can only take postif value");
      return;
    }
    Data.dec(1);
    document.getElementById("adidas-quantity").value =
      Data["items"][1]["quantity"];
    document.getElementById("adidas-total-price").innerHTML =
      Data["items"][1]["price"] * Data["items"][1]["quantity"];
  });

  document.getElementById("like-1").addEventListener("click", function () {
    document.getElementById("like-1").style.color = "red";
  });

  document.getElementById("like-2").addEventListener("click", function () {
    document.getElementById("like-2").style.color = "red";
  });

  document.getElementById("nike-total-price").innerHTML =
    Data["items"][0]["price"] * Data["items"][0]["quantity"];
  document.getElementById("adidas-total-price").innerHTML =
    Data["items"][1]["price"] * Data["items"][1]["quantity"];

  document.getElementById("total-price").addEventListener("click", function () {
    document.getElementById("total-value").innerHTML = Data.total_price();
  });
  return Data;
}

Cart();
