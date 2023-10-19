"use strict";


// var age = 32;
// age = "Thirty two";
// let name = 'Anna';
// const pi = 3.14;

// console.log(typeof age, age);
// console.log(typeof name, name);
// console.log(typeof pi, pi);

// let x = 5;

// {
//     var y = 10;
//     console.log(x, y);
// }

// // console.log(x, y);

// console.log(x);
// let x = 5;
// console.log(x);

// function findMax(x, y, ...more) {
//     let i;
//     let max = -Infinity;
//     console.log(arguments);
//     console.log(more)
//     // for (i = 0; i < arguments.length; i++) {
//     //     if (arguments[i] > max) {
//     //         max = arguments[i];
//     //     }
//     // }
//     return max;
// }
// let max1 = findMax(1, 123, 500, 115, 66, 88);


// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);
// arr.splice(2, 0, 8, 9);
// console.log(arr);

let arr = ["Apple", "Orange", "Watermelon"];

arr.forEach(function (element) {
    console.log(element);
});
let arr2 = arr.filter((e, index, arr1) => e.length > 6);
console.log(arr2);