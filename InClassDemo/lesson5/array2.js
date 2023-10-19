const arr = ['Banana', 'Apple', 'Strawberry', 'Blueberry', 'Cranberry', 'Blackberry', 'Raspberry'];
console.log(arr);
// const res1 = arr
//     .filter(fruit => fruit.includes('berry'))//'Strawberry', 'Blueberry', 'Cranberry', 'Blackberry', 'Raspberry'
//     .map(fruit => fruit.length)
// console.log(res1);

// const result = arr.filter(function (fruit, index, array) {
//     console.log(fruit);
//     return fruit.includes('berry');
// })
//     .map(function (fruit, index, array) {
//         // console.log(fruit);
//         return fruit.length;
//     })
// console.log(result);

const grades = [90, 88, 78, 66, 55];
// const sum = grades
//     .filter(function (v) { return v > 70 })
//     .reduce(function (sum, current, index, array) {
//         console.log(index, array);
//         return sum + current; //0 + 90 sum =90, 90+88 sum = 178 + 78
//     }, 0);

// console.log(sum);


const avg = grades
    .filter(v => v > 70)
    .reduce((sum, current, index, array) => sum + current / array.length, 0);

console.log(avg);
