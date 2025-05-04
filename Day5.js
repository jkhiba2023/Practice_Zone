// 1. JavaScript Program to Create Objects in Different Ways.

//?Approach 1

// function person(name, age, location) {
//   this.name = name;
//   this.age = age;
//   this.location = location;
// }

// let human = new person('Rahul', 32, 'Mira Road');
// console.log(human['location']);

//?Approach 2

// let human = {
//   name: "Ramu Kaka",
//   age: 52,
//   location: "Surat"
// }
// console.log(human['location']);

//Approach 3

//Adding methods to the human object
let human = {
  name: "Rose Marlo",
  age: 25,
  location: 'Borivali',
  fitness: function () {
    console.log('Healthy and fit');
  }
}
console.log(human.fitness());
human.isGraducate = function () {
  return true;
}
console.log(human);



