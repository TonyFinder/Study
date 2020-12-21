"use.strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
          
//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Good');
//     } else {
//         console.log('Error');
//         i--;
//     } 
// }

// let i = 0;

// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
          
//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//         console.log('Good');
//     } else {
//         console.log('Error');
//     }
// } while (i < 2);

// let i = 0;

// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
          
//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//         console.log('Good');
//     } else {
//         console.log('Error');
//     }
// }

// console.log(personalMovieDB);

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман');
// } else if (personalMovieDB.count > 9 && personalMovieDB.count < 31) {
//     console.log('Вы классический зритель');
// } else {
//     console.log('Произошла ошибка');
// }

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessage('Hello Mike!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 9));
// console.log(calc(1, 15));
// console.log(calc(1, 9));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello!');
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};