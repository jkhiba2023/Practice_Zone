//Javascript program to remove duplicate from and array.

//Approch 1

let arr1 = [10, 99, 12, 10, 25, 13, 68, 99, 17, 20, 25, 23, 24];
console.log(arr1.length);
let unique = [...new Set(arr1)];
console.log(unique);