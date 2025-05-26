//JavaScript Program to Find the Largest Among Three Numbers.
//1st Approach

// Using if-else condition.

function findLargest(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

const largestNum = findLargest(24, 36, 30);
console.log(largestNum);