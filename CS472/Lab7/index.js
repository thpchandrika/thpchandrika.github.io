//"use strict";

//Question 1: Fix using wrapper, bind, call, apply.
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    'name': 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};
// askPassword(user.loginOk, user.loginFai1); //problem

//using wrapper
askPassword(function () { user.loginOk() }, function () { user.loginFail() })

//using call
askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));
askPassword(function () { user.loginOk.call(user) }, function () { user.loginFail.call(user) })

//using apply
askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));
askPassword(function () { user.loginOk.apply(user) }, function () { user.loginFail.apply(user) })

//using bind
askPassword(() => user.loginOk.bind(user)(), () => user.loginFail.bind(user)());
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


//Question 2: Fix the code below using bind

// //Given code to be fixed
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this.title + ": " + student
//             );
//         });
//     }
// };
// group.showList();

//using bind
function printStudent(student) {
    console.log(this.title + ": " + student);
};

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => printStudent.bind(group, student)())
    }
};
group.showList();


