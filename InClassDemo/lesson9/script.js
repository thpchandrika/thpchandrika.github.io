// let Person = class { }; // class expression
class Employee {  //class declaration
    #fullname;
    static #counter = 0; //
    constructor(name, salary) {
        this.salary = salary;
        this.#fullname = name;
        Employee.#incCounter()
        this.sayHi = function () {
            // Employee.prototype.sayHi();
            console.log("emp")
        } //instance in cureent object
    }
    calsSalary() { //instance method  in Employee.prototype
        return this.salary; // this refers to current object 
    }
    sayHi() { //instance method in Employee.prototype
        console.log("Employee.prototype")

    }
    static sayHi() { //static method in Employee constructor function
        console.log("Employee")

    }
    static getCounter() { //static method in Employee constructor function
        return this.#counter; // this refers to class itself
    }
    static #incCounter() {
        this.#counter++;
    }

    get name() {//getter
        return this.#fullname;
    }
    set name(n) { //setter
        this.#fullname = n;
    }

    getName() { //instance method
        return this.#fullname;
    }


}
let emp = new Employee("Anna Johns", 150000);

// console.dir(Employee);
// console.dir(Employee.prototype);
// console.dir(emp);

// emp.sayHi()
// emp.calsSalary();
// Employee.getCounter();


// console.log(emp.name);
// emp.name = "Smith";
// emp.calsSalary();
// emp.getName();
// console.log(emp.name);
// console.log(typeof Employee);

class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary)
        this.bonus = bonus;
    }
    getBonus() {
        return this.bonus;
    }
    calsSalary() {
        return super.calsSalary() + this.bonus;
    }

    static getCounter() {
        return Employee.getCounter();
    }

}

let mgr1 = new Manager("Smith Kerry", 170000, 25000)
// console.log(mgr1.calsSalary());
console.log(mgr1);

// console.dir(Manager);
console.dir(Manager.getCounter());
console.dir(Employee.getCounter());
// console.dir(mgr1);
// console.log(mgr1 instanceof Manager)
// console.log(mgr1 instanceof Employee)
// console.log(mgr1 instanceof Object)

// console.log(emp instanceof Employee)
// console.log(emp instanceof Manager)
// console.log(emp instanceof Object)