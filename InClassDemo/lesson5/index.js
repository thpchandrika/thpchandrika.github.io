console.log(this);

// let temp = 'studentId';

// const obj = {
//     firstname: 'John',
//     lastname: 'Smith',
//     'my age': 20,
//     [temp]: 'something',
//     var: 23232,
//     getFullName: function () {
//         return `${this.firstname} ${this.lastname}`;
//     },
//     computeFullName() {
//         return `----${this.firstname} ${this.lastname}----`;
//     },
//     address: {
//         street: "1000 N 4th",
//         city: "FF"
//     }
// }
// console.log(obj);
// console.log(obj.getFullName());
// console.log(obj.computeFullName());

// console.log(temp);

// const greeting = 'firstname';
// // obj[greeting] = '11';

// console.log(typeof obj);




// console.log(obj.firstname, obj.lastname, obj.temp, obj.studentId, obj.address.street);
// console.log(obj['firstname'], obj['lastname'], obj[temp], obj['my age'], obj['address']['street']);


// let stooges = []; // stooges.length is 0
// console.log(stooges.length)
// stooges[0] = "Larry"; // stooges.length is 1
// stooges[1] = "Moe"; // stooges.length is 2
// stooges[4] = "Curly"; // stooges.length is 5
// stooges[4] = "Shemp"; // stooges.length is 5
// console.log(stooges.length)
// console.log(stooges)

// let a = ["Stef", "Jason"]; // Stef, Jason
// console.log(a)
// a.push("Brian"); // Stef, Jason, Brian
// console.log(a)
// a.unshift("Kelly"); // Kelly, Stef, Jason, Brian
// console.log(a)
// a.pop(); // Kelly, Stef, Jason
// console.log(a)
// a.shift(); // Stef, Jason
// console.log(a)
// a.sort();

// console.log(a)

// console.log(square(5));

// function square(number) {
//     return number * number;
// }


// function log(x, y) {
//     console.log("2 Arguments: " + x + ", " + y);
// }
// log();
// log(5);
// log(6, 7);
// log(6, 7, 8);

// function findMax() {
//     var i;
//     var max = -Infinity;
//     console.log(arguments.length)
//     for (i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// var max1 = findMax(1, 123, 500, 115, 66, 88);
// console.log(max1)
// var max2 = findMax(3, 6, 8);
// console.log(max2)
// function sum(x, y, ...more) {
//     //"more" is array of all extra passed params
//     console.log(arguments.length);
//     let total = x + y;
//     console.log(more.length);
//     if (more.length > 0) {
//         for (let i = 0; i < more.length; i++) {
//             total += more[i];
//         }
//     }
//     console.log(total);
//     return total;
// }
// sum(5, 5, 5);
// sum(6, 6, 6, 6, 6);
