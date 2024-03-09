var id = document.getElementById("div-id+");
console.log(id);

var classes = document.getElementsByClassName("div-class");

console.log(classes);

var byName = document.getElementsByTagName("div");

console.log(byName);

var query = document.querySelector("div");
var queryAll = document.querySelectorAll("div");

console.log(query);

console.log(queryAll);

document.getElementById("5").setAttribute("class", "added  class with js");
document.getElementById("div-id").removeAttribute("style");

var divs = document.querySelectorAll(".div-class");

console.log(divs);
for (let i = 0; i < divs.length; i++) {
  divs[i].style.backgroundColor = "red";
}

document.getElementById("5").style.color = "red";

document.getElementById("delete").remove();

var newDiv = document.createElement("div");
newDiv.innerHTML = "bonjour";

document.getElementById("div-id").appendChild(newDiv);

document.getElementById("btn").addEventListener("click", function () {
  alert("bonjour");
});

function validateForm(e) {
  e.preventDefault();
  var name = document.loginForm.name.value;
  var password = document.loginForm.password.value;
  if (name.length == 0) return alert(`name is required`);
  if (password.length < 5) return alert(`password length should more than 5`);

   return alert("good job");
}
