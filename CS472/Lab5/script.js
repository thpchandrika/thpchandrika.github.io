"use strict";
// The strict mode in JavaScript does not allow following things:
// 1.Use of undefined variables
// 2.Use of reserved keywords as variable or function name
// 3.Duplicate properties of an object
// 4.Duplicate parameters of function
// 5.Assign values to read-only properties
// 6.Modifying arguments object
// 7.Octal numeric literals
// 8.with statement

//Q1
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// let output = max(-4,-9);
// console.log(output);

//Q2
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

// let output = maxOfThree(0, 5,-2);
// console.log(output);

//Q3
function isVowel(letter) {
    letter = letter.toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' | letter === 'o' || letter === 'u') {
        return true;
    } else {
        return false;
    }
}

// let output = isVowel("i");
// console.log(output);

//Q4 
function sum() {
    console.log(arguments);
    let sum = 0;
    for (let number of arguments) {
        sum = sum + number;
    }
    return sum;
}
//Q4
function multiply() {
    console.log(arguments);
    let product = arguments[0][0];
    for (let number of arguments[0]) {
        product = product * number;
    }
    return product;
}

//   let arr = [1,2,3,4];
//   console.log(sum(arr) );
//   console.log(multiply(arr));

//Q5
function reverse(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

// let output = reverse("jag testar");
// console.log(output);

//Q6
function findLongestWordLength(words) {
    let maxLength = words[0].length;

    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}
// let arr = ["harry", "potter", "raman"];
// console.log(findLongestWordLength(arr));

//Q7
function filterLongWords(words, i) {
    let output = words.filter(word => word.length > i);
    return output;
}
// let arr = ["harry", "potter", "ramanynand"];
// console.log(filterLongWords(arr,5));

//Q8
function computeSumOfSquares(numbers) {
    let sum = 0;
    numbers.forEach(number =>
        sum += number * number
    );
    return sum;
}

// console.log(computeSumOfSquares([1,2,3]));

//Q9
function printOddNumbersOnly(numbers) {
    let odds = numbers.filter(number => number % 2 == 1);
    console.log(odds);
}

// printOddNumbersOnly([1,2,3]);

//Q10
function computeSumOfSquaresOfEvensOnly(numbers) {
    let evens = numbers.filter(number => number % 2 == 0);
    let sum = 0;
    evens.forEach(number =>
        sum += number * number
    );
    return sum;
}

//console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));

// //Q11 using function
// function sum1(arr) {
//     let result = arr.reduce(function (sum, current, index, arr) {
//         return sum + current
//     }, 0);
//     return result;
// }

//Q11 using arrow function
function sum1(arr) {
    return arr.reduce((sum, current, index, arr) => sum + current, 0);
}

// //Q11 using function
// function multiply1(arr) {
//     return arr.reduce(function (product, current) { return product * current }, 1)
// }

//Q11 using arrow function
function multiply1(arr) {
    return arr.reduce((product, current) => product * current, 1)
}

// let arr = [1, 2, 3, 4];
// console.log(sum1(arr));
// console.log(multiply1(arr));

//Q12 fibonacci
function printFibo(n, a, b) {
    if (n <= 0) {
        return;
    }

    const fiboArr = [a];

    if (n > 1) {
        fiboArr.push(b);
    }

    while (fiboArr.length < n) {
        const next = fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2];
        fiboArr.push(next);
    }
    const result = fiboArr.join(', ');
    console.log(result);
}

// printFibo(1, 0, 1);
// printFibo(2, 0, 1);
// printFibo(3, 0, 1);
// printFibo(6, 0, 1);
// printFibo(10, 0, 1);

