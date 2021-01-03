"use.strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 10,
//     b: 5
// };

// const copy = obj; // Передаётся ссылка

// copy.a = 20;

// console.log(copy);
// console.log(obj);

// function copy(obj) {
//     let objNew = {};
//     let key;
//     for (key in obj) {
//         objNew[key] = obj[key];
//     }

//     return objNew;
// }

const numbers = {
    a: 5,
    b: 10,
    c: 25,
    d: {
        x: 35,
        y: 2
    }
};


// const newNumbers = copy(numbers);

// newNumbers.a = 18;
// newNumbers.d.x = 58; //Здесь уже ссылка, потому что вложенная

// console.log(newNumbers);
// console.log(numbers);

const add = {
    e: 40,
    f: 50
};

// console.log(Object.assign(numbers, add));

// console.log(numbers);
// console.log(add);

const clone = Object.assign({}, add);
clone.e = 12;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'abl;lh;h';

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'rutube'],
      blogs = ['livejournal', 'newcinemf'],
      combo = [...video, ...blogs, 'big boss', 'famouse'];
      
console.log(combo);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [4, 6, 23];
log(...num);

const array = ['a', 's', 'p'];
const newAray = [...array];

console.log(newAray);

const obj = {
    a: 5,
    b: 12
};

const newObj = {...obj};

console.log(newObj);