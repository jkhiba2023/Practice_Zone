//1. JavaScript Program To Print Hello World
console.log("Hello World");

//2. JavaScript Program to Add Two Numbers
let a = 10;
let b = 5;
let result = a + b;
console.log(result);

function adding(c, d) {
  return c + d;
}
console.log(adding(20, 30));

//3. JavaScript Program to Calculate the Area of a Triangle

function areaOfTriangle(base, height) {
  let result = base * height * 0.5;
  return result;
}

console.log(areaOfTriangle(3.5, 4.2));

//4. JavaScript Program to Swap Two Variables

let num1 = 10;
let num2 = 7;
let temp = 0;
console.log(`Before swapping num1 ${num1}, num2 ${num2}`);
temp = num2;
num2 = num1;
num1 = temp;
console.log(`After swapping num1 ${num1}, num2 ${num2}`)

function swapNum(n1, n2) {
  let temp = 0
  console.log(`Before swapping n1: ${n1} & n2: ${n2}`);
  temp = n2;
  n2 = n1;
  n1 = temp;
  console.log(`Before swapping n1: ${n1} & n2: ${n2}`);
}

swapNum(8, 9)
