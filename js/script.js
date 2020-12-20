"use.strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
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

let i = 0;

while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          
    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        i++;
        console.log('Good');
    } else {
        console.log('Error');
    }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else if (personalMovieDB.count > 9 && personalMovieDB.count < 31) {
    console.log('Вы классический зритель');
} else {
    console.log('Произошла ошибка');
}
