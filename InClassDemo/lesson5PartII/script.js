let myJSmatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// for (let i = 0; i < myJSmatrix.length; i++) {
//     for (let j = 0; j < myJSmatrix[i].length; j++) {
//         console.log(myJSmatrix[i][j]);
//     }
// }

// for (let arr of myJSmatrix)
//     for (let e of arr)
//         console.log(e);

// myJSmatrix.forEach(arr => arr.forEach(e => console.log(e)));

// let arr = [1, 2, 3]
// arr[7] = 7; //sparse array
// console.log(arr, arr.length)

// let filteredArray = arr.map(e => e * 3);
// console.log(filteredArray)

// myJSmatrix.sort((e1, e2) => {
//     if (e1[0] > e2[0]) return -1;
//     if (e1[0] == e2[0]) return 0;
//     if (e1[0] < e2[0]) return 1;
// });

// console.log(myJSmatrix);

let person = {
    fullname: "Anna Johns",
    dob: new Date(1993, 5, 5),
    "billing address": [
        { street: "1000 N 4th", city: "Fairfield", state: "IA", zip: 52557 },
        { street: "1115 Grenville ave", city: "Fairfield", state: "IA", zip: 52256 }],
    "shipping address": [
        { street: "2500 N 4th", city: "Fairfield", state: "CA", zip: 45667 },
        { street: "1115 Grenville ave", city: "Fairfield", state: "CO", zip: 52889 }],

    getDob: function () {
        return this.dob;
    }
}
//. []
// console.log(person.fullname);
// console.log(person['fullname']);
// console.log(person.dob);
// console.log(person["billing address"][0].street);
// console.log(person["billing address"][0]['street']);

// person.middle = "Anna"
// console.log(person);

// delete person.middle;
// console.log(person);
console.log(person.getDob())

person.getFullname = function () {
    return this.fullname;
}

console.dir(person);
