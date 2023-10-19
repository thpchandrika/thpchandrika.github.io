"use strict"
// function foo(...rest) {

//     // console.log(x, y);
//     console.log(rest);
//     const res = rest.filter(item => typeof item === 'number');
//     console.log(res);
// }
// foo(1, 2, 3, 4, 5, 6, 'rest', 'hello', ['a', 'b'], { x: 1 });




// function log(){
//     console.log('0 arguments');
// }

// function log(arg1){
//     console.log(`1 argument: ${arg1}`);
// }

// function log(arg1, arg2){
//     console.log(`2 arguments: ${arg1} ${arg2}`);
// }

// log();
// log(111);
// log(111, 222);





// function foo(arg1='John', arg2='Edward', arg3=123){
//     console.log(arg1, arg2, arg3);
// }
// foo(55, 66, 77, 88, 99, 98);
// foo(1,2,3);
// foo('a', 'b');
// foo(6);


// function foo(){
//     return function(){
//         return 'Surprise';
//     }
// }

// console.log(foo()());


// function square(num){
//     return num * num;
// }
// console.log(square(4));


// const square2 = num => num * num;

// console.log(square2(8));

// const foo = (a, b ,c) => 'Hi';
// console.log(foo());



// const sum = function(n1, n2){
//     return n1 + n2;
// }
// console.log(sum(1,2));

// function reverse(str) {
//     //return str.split("").reverse().reduce((sum, cur, index, array) => sum + cur, "");
//     return str.split("").reduce((sum, cur, index, array) => cur + sum, "");
// }


// console.log(reverse("Hello"))
// 12. Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers
// and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should
// return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)

// function findSecondBiggest(numArr) {
//     let max = Math.max(...numArr);
//     return numArr
//         .filter((cur, index, array) => max !== cur)
//         .reduce((pre, cur, index, arrat) => pre < cur ? cur : pre, 0);
// }

// console.log(findSecondBiggest([19, 9, 11, 0, 12]));

// 13. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b,
// and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with
// a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
// output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2,
// 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

// function f1() { }; f1.name // 'f1'
// const f2 = function () { }; f2.name //'‘ or ‘f2’ in ES6
// const f3 = function f3() { }; f3.name //’f3’
// //Named Function Expression(NFE)
