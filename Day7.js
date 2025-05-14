//Javascript program to remove duplicate from and array.

//Approch 1

let arr1 = [10, 99, 12, 10, 25, 13, 68, 99, 17, 20, 25, 23, 24];
// console.log(arr1.length);
// let arr2 = [35, 40, 45, 99, 32, 15, 18, 58, 25, 68];
// let margeArr = arr1.concat(arr2)
// console.log(margeArr.length);
// console.log(margeArr.sort((a, b) => b - a));


// let unique = [...new Set(margeArr)];
// console.log(unique);

//Approach 2 --- using filter()

// removeDuplicate = arr1.filter((item, indx) => arr1.indexOf(item) === indx);
// console.log(removeDuplicate.sort());

//Approach 3 --- using forEach method
let emptyarr = [];
arr1.forEach((ele) => {
  if (!emptyarr.includes(ele)) {
    emptyarr.push(ele);
  }
})

console.log(emptyarr.sort());
