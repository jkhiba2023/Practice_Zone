//1. Find Largest Element in Array

//Approch 1
const arr = [10, 27, 15, 18, 11]
const lElement = Math.max(...arr);
console.log(lElement);

//Approch 2 

const arr2 = [10, 5, 20, 8, 15]
const largeNum = arr2.reduce(getLarge);
console.log(largeNum);

function getLarge(previousValue, currentValue) {
  return Math.max(previousValue, currentValue)
}

//Approch 3

function largeElement(arr) {
  return arr.reduce((largeValue, currentValue) =>
    (currentValue > largeValue ? currentValue : largeValue))
}

const namo = [10, 15, 38, 20, 13];
console.log(largeElement(namo));


//Approch 4

function maxNumElement(arr3) {
  let largeNumo = arr3[0]
  for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > largeNumo) {
      largeNumo = arr3[i]
    }
  }
  return largeNumo
}

let numo = [10, 15, 18, 20, 23];
let res3 = maxNumElement(numo)
console.log(res3);

//Approch 5

function sortLargeNum(arr4) {
  arr4.sort((a, b) => (a - b));
  return arr4[arr4.length - 1]
}

let res4 = sortLargeNum(numo);
console.log(res4);

//Approch 6

const array = [10, 5, 20, 8, 15];
let largest = array[0];

array.forEach(element => {
  if (element > largest) {
    largest = element;
  }
});

console.log(largest);

