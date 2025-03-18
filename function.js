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

/**************************************************Day 3************************************************************/


//11. JavaScript Program to Check Prime Number.

function isPrime(x) {
  if (x <= 1) return false
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false
    break;
  }
  return true;
}

console.log(isPrime(7));

//12. JavaScript Program to Print All Prime Numbers in an Interval.

function isPrime(num) {
  if (num <= 1) return false
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) return false
    break;
  }
  return true
}


//13. JavaScript Program to Print All Prime Numbers in an Interval

function isPrime(num) {
  if (num <= 1) return false
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) return false
    break;
  }
  return true
}

function rangeOfPrime(n) {
  let result = [];
  console.log(`Prime number from ${n}`)
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result.join(',')
}

console.log(rangeOfPrime(30));


//14. JavaScript Program to Find the Factorial of a Number

function fact(x) {
  let res = 1;
  for (let i = 1; i <= x; i++) {
    res = res * i;
  }
  return res
}

console.log(fact(5));

//15. JavaScript Program to Display the Multiplication Table

function MultiTable(num, limit) {
  console.log(`Table of ${num}`);
  for (let i = 1; i <= limit; i++) {
    console.log(`${num}*${i}=${num * i}`)
  }
}

MultiTable(10, 20);

//16. JavaScript Program to Print the Fibonacci Sequence

function fibonacciSeries(n) {
  let fibo = [0, 1]
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo
}
console.log(fibonacciSeries(7))

//17. JavaScript Program to Check Armstrong Number

function isArmstrong(n) {
  let sum = 0; str = n.toString(); leng = str.length;
  for (let i = 0; i < str.length; i++) {
    sum = sum + Math.pow(str[i], leng)
  }
  return sum === n
}

console.log(isArmstrong(153));

//18. JavaScript Program to Find Armstrong Number in an Interval.

function isArmstrong(n) {
  let sum = 0; str = n.toString(); leng = str.length;
  for (let i = 0; i < str.length; i++) {
    sum = sum + Math.pow(str[i], leng);
  }
  return sum === n
}

function rangeOfArmstrong(n1) {
  let res = [];
  for (let i = 1; i < n1; i++) {
    if (isArmstrong(i)) {
      res.push(i);
    }
  }
  return res
}

console.log(rangeOfArmstrong(5000));