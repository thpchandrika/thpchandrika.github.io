//Question1
Array.prototype.even = function () {
    return this.filter(item => item % 2 === 0);
};

Array.prototype.odd = function () {
    return this.filter(item => item % 2 !== 0);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 90, 99];
console.log(arr.even());
console.log(arr.odd()); 