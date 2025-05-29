//JavaScript Program to Find the Largest Among Three Numbers.

//1st Approach
// Using if-else condition.

// function findLargest(num1, num2, num3) {
//   if (num1 >= num2 && num1 >= num3) {
//     return num1;
//   } else if (num2 >= num1 && num2 >= num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// }

// const largestNum = findLargest(24, 36, 30);
// console.log(largestNum);

//2nd Approach
//Using Math.max()

// function findLargest(num1, num2, num3) {
//   return Math.max(num1, num2, num3);
// }

// const largestNumber = findLargest(29, 49, 19);
// console.log(largestNumber);

//3rd Approach
//Using spread operator using Math.max()

// function findLargest(num1, num2, num3) {
//   return Math.max(...[num1, num2, num3]);
// }

// const largestNumber = findLargest(15, 19, 11);
// console.log(largestNumber);

//4th Approach
//Using Ternary Operator

function findLargest(num1, num2, num3) {
  return num1 >= num2 && num1 >= num3 ? num1 : num2 >= num1 && num2 >= num3 ? num2 : num3;
}

const maxNum = findLargest(2, 8, 6);
console.log(maxNum);