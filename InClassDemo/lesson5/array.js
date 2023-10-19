


const queue = [1, 2, 3, 4];
// queue.push(5);
// queue.push(6);
// console.log(queue);
// queue.shift();
// queue.shift();
// console.log(queue);
// queue.unshift('hi');
// queue.unshift('ddd');
// console.log(queue);

// console.log('---------------');
// const arr1 = [];
// arr1[0] = 'a';
// arr1[1] = 'b';

// arr1.push('hi');
// arr1.push('nihao');
// console.log(arr1);
// arr1.pop();
// arr1.pop();
// console.log(arr1);





// "strict mode"

// let arr2 = [1, 2, 3];
// arr2[0] = 'abc';
// arr2[3] = '888';
// console.log(arr2);

// const arr3 = new Array();
// arr3[0] = 12;
// arr3[1] = 66;
// arr3[9] = 5;
// for (let a of arr3)
//     console.log(a);
// let test, Test;
let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
let arr2 = arr.splice(2, 1, "complex", "language");
console.log(arr2);
console.log(arr);

let arr3 = arr.slice(1, 2);
console.log(arr3);

let str = "test s sss as,aa";

console.log(str.split(/,| /));

console.log(2 + 5 / "2");
console.log("2" / 2 + 5);