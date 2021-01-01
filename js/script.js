"use.strict";

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));



const arr = [10, 2, 38, 6, 18];

console.log(arr.sort(compareNum));

function compareNum(a, b) {
    return a - b;
}

// arr.forEach (function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// for (let value of arr) {
//     console.log(value);
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.pop();
// arr.push(12);

// console.log(arr);