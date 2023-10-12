// //Question1:using object literal
// let student = {
//     firstName: "Chan",
//     lastName: "Thapa",
//     grades: [],
//     inputNewGrade: function (grade) {
//         this.grades.push(grade);
//     },
//     computeAverageGrade: function () {
//         let total = this.grades.reduce((sum, value) => sum + value, 0);
//         return total / this.grades.length;
//     }
// }
// let s1 = Object.create(student);
// s1.inputNewGrade(2);

// let s2 = Object.create(student);
// s2.inputNewGrade(3);

// let s3 = Object.create(student);
// s3.inputNewGrade(4);

// const studentArr = [s1, s2, s3];
// const avergeGrade = studentArr.map(student => student.computeAverageGrade());
// console.log(avergeGrade);

// //Question2:using constructor function
// function Student(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grades = [];

//     this.inputNewGrade = function (grade) {
//         this.grades.push(grade);
//     };

//     this.computeAverageGrade = function () {
//         let total = this.grades.reduce((sum, value) => sum + value, 0);
//         return total / this.grades.length;
//     }
// }

// let s1 = new Student('Chandrika', 'Thapa');
// s1.inputNewGrade(3);

// let s2 = new Student('Hary', 'Potter')
// s2.inputNewGrade(1);

// let s3 = new Student('Shyam', 'KC')
// s3.inputNewGrade(4);

// const studentArr = [s1, s2, s3];
// const avergeGrade = studentArr.map(student => student.computeAverageGrade());
// console.log(avergeGrade);

// //Question3: Adding new method customSort()
// Array.prototype.customSort = function () {
//     return this.sort(compare);
// }

// const myArray = [3, 1, 2, 5, 4];
// console.log(myArray.customSort());

// //Question4: Prototypal Inheritence Diagram
// function Animal(name, speed) {
//     this.name = name;
//     this.speed = speed;
//     this.run = function () {
//         this.speed++;
//     }
// }

// function Rabbit(name, speed) {
//     Animal.call(this, name, speed);
//     this.hide = function () {
//         console.log(name + " hides");
//     }
// }

// // Set up prototypal inheritance
// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;

// const whiteRabbit = new Rabbit('Snowy', 11);
// whiteRabbit.run();
// whiteRabbit.hide();
// console.log(whiteRabbit.speed);

// const brownRabbit = new Rabbit('Browny', 6);
// brownRabbit.run();
// brownRabbit.hide();
// console.log(brownRabbit.speed);

// // Add static method to the Animal prototype
// Animal.compareBySpeed = function (a1, a2) {
//     if (a1.speed > a2.speed) return `${a1.name} runs faster than ${a2.name}`
//     else if (a1.speed === a2.speed) return `${a1.name} runs same as ${a2.name}`
//     else
//         return `${a2.name} runs faster than ${a1.name}`
// }

// console.log(Animal.compareBySpeed(whiteRabbit, brownRabbit));








