"use.strict";

// let str = "проказник";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100,
    SayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 200
// };

// Object.setPrototypeOf(john, soldier);

// john.__proto__ = soldier;

// console.log(john.armor);
john.SayHello();