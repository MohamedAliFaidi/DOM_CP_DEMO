const people = [
  { age: 20, name: "Max" },
  { age: 19, name: "Jack" },
  { age: 17, name: "Marry" },
];
let i = 0;
while (i < people.length && people[i].name != "Jack") {
  i++;
}
// if (i !== people.length) {
//   alert("Jack is in " + i);
// } else {
//   alert("Cannot find Jack");
// }

// foreach array method

people.forEach((a, i) => {
  a["index"] = i;
});

console.log(people);

let mapped = people.map((e, i) => ({ ...e, name: e.name + "hahahaha" }));

console.log(people, "people");
console.log(mapped, "mapped");



let filtred = people.filter((e,i)=>{
   return e.age >18
})


console.log("_________________________________________________________")
console.log(filtred ,"filtred");
console.log("_________________________________________________________")



let found = people.find((e,i)=>{
  return e.age >18
})


console.log("_________________________________________________________")
console.log(found ,"found");
console.log("_________________________________________________________")




let reduced = people.reduce((a,c)=>{
  return a+c.age
} ,0)


console.log("_________________________________________________________")
console.log(reduced ,"reduced");
console.log("_________________________________________________________")

