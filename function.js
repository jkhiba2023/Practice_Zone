//**************************************************Day 1************************************************************/

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

swapNum(88, 97)


//5. JavaScript Program to Convert Kilometers to Miles

function kmToM(x) {
  const mile = 0.621371;
  const kilometerToMile = x * mile
  console.log(kilometerToMile);
}
kmToM(5.2);

/**************************************************Day 2************************************************************/

//6. Javascript Program to Convert Celsius to Fahrenheit

function celToFahr(y) {
  const fahrenheit = 32;
  let cels = (y * 9 / 5) + fahrenheit;
  return cels;
}

console.log(celToFahr(42));


//7. Javascript Program to Generate a Random Number

function randomNum(x) {
  const randNum = Math.floor(Math.random() * x)
  return randNum
}

console.log(randomNum(45));

//8. Javascript Program to Check if a number is Positive, Negative, or Zero

function checkNum(x) {
  if (x > 0) {
    console.log(`${x} is positive`);
  } else if (x < 0) {
    console.log(`${x} is negative`);
  } else {
    console.log(`${x} Zero`);
  }
}

checkNum(10);
checkNum(-9);
checkNum(0);

//9. Javascript Program to Check if a Number is Odd or Even.

function checkEvenOrOdd(x) {
  if (x % 2 == 0) {
    console.log(`${x} it is an even number`);
  } else {
    console.log(`${x} it is an odd number`);
  }
}
checkEvenOrOdd(14);
checkEvenOrOdd(17);

//10. JavaScript Program to Find the Largest Among Three Numbers.

function getMaxNum(arr) {
  return Math.max.apply(null, arr)
}

console.log(getMaxNum([10, 22, 15, 19]));
