
// console.log(str);
// var str = "hello";
// console.log(str);



// let str = "hello";
// console.log(str);


// let str = "hello";
// console.log(str);



// console.log(str);
// if (true) {
//     var str = "hello";
// }
// console.log(str);



// if (true) {
//     let str = "hello";
//     console.log(str);
// }

// console.log(str);


// var a = 5;
// let b = 10;
// if (true) {
//     var c = 15;
//     let d = 28;
// }


//function scope & Function declaration --------------------

// function foo(arg) {
//     if (arg) {
//         var str = "hello";
//     }
//     console.log(str);
// }
// foo(1);
// let a = 5;
// var str1 = "Hi hi"
// console.log(str1);


// foo("Hi", 23);
// function foo(arg) {
//     if (arg) {
//         var str = "hello";
//     }

//     console.log(str);
// }


// var foo = function () {
//     console.log("Hello");
// }
// foo();




//scope chain --- lexical scoping ----------------------------------
// function a() {
//     const x = 5;
//     console.log(x);
// }
// function b() {
//     const x = 10;
//     a();
// }
// const x = 20;
// b();


// function b() {
//     function a() {
//         console.log(x);
//     }
//     console.log(x);
//     a();
// }
// const x = 20;
// b();

// function b() {
//     function a() {
//         if (true) {//if (x == 10) {
//             var x = 15;
//             let d = 8;
//         }
//         {//1 LE
//             x = 10;
//             console.log(x);
//         }
//         console.log(x);
//     }
//     x = 10;
//     a();
// }
// var x = 20;
// b();

// var a = 5;
// let b = 10;
// if (true) {
//     var c = 15;
//     let d = 28;
//     {//a block scope
//         let aa = 55;
//     }

//     {//b block scope
//         let bb = 100;
//     }

// }

// Closure and free variable ---------------------------

// var a = 1;
// let b = 2;
// function outer() {
//     let c = 3;
//     var d = 4;
//     return function inner() {
//         let b = 5;
//         let c = 6;

//         console.log(a);
//         console.log(b);
//         console.log(c);
//         console.log(d);
//     }
// }
// outer()();



// let a = 2;
// function foo() {
//     let b = 3;
//     var bar = function (d) {
//         let c = 5;
//         console.log(a, b, c, d);//b is free variable
//     }
//     console.log(b);
//     return bar;
// }
// let baz = foo();
// baz(7);
// console.log(a);

// var a = function () { console.log("a function expression"); }; //variable is higher priority
// function a() { console.log("a declaration"); }


// a();

// let x = 1;
// function foo(y) {
//     let inner = function (z) {
//         y = 3;
//         return x + y + z;
//     }
//     return inner;
// }
// let f = foo(2);
// console.log(f(5));
// console.dir(f);


// const f = 'John';
// function print() {
//     const l = 'Doe';
//     function display(p) {
//         console.log(`${p} from ${f} ${l}`);
//     }
//     return display;
// }
// const func = print();
// func("Hello");
// console.dir(func);


// function cal(type, a, b) {
//     if (type === 'add') {
//         return a + b;
//     } else if (type === 'subtract') {
//         return a - b;
//     }
//     else if (type === 'multiply') {
//         return a * b;
//     }
//     else { return a / b; }
// }
// let four = 4;
// let seven = 7;
// console.log(cal('add', four, seven));

// var a = function () { // variable is higher priority
//     console.log('function expression');
// }

// function a() {
//     console.log('function declaration');
// }
// a();


// console.log(window);
// a = 5;
// console.log(window);