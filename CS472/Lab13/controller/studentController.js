const Student = require("../model/student");

let controller = {
    getStudents: function (req, res, next) {
        res.status(200).json(Student.getAll());
    },

    getStudentById: function (req, res, next) {
        console.log("Get By id");
        let id = parseInt(req.params.id); //params.id is treated as string
        let student = Student.getById(id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: "student not found." })
        }
    },

    createStudent: function (req, res, next) {
        console.log(req.body);
        let { id, name, program } = req.body;
        if (id && name && program) {
            let student = new Student(id, name, program);
            student.create();
            res.status(201).json(student);
        } else {
            res.status(400).json({ message: "provide all data." })
        }
    },

    deleteStudent: function (req, res, next) {
        let id = parseInt(req.params.id);
        console.log(id, typeof id);
        let deletedStudent = Student.removeById(id);
        if (!deletedStudent) {
            res.status(404).json({ message: "student not found" });
        }
        else {
            res.status(200).json(deletedStudent);
        }
    },
    updateStudent: function (req, res, next) {
        let id = parseInt(req.params.id);
        let { name, program } = req.body;
        if (id && name && program) {
            let newStudent = new Student(id, name, program);
            let updatedStudent = newStudent.update();
            if (!updatedStudent) {
                res.status(404).json({ message: "student not found" });
            } else {
                res.status(200).json(updatedStudent);
            }
        } else {
            res.status(400).json({ message: "provide all data." })
        }
    },

    filterByProgram: function (req, res, next) {
        let program = req.query.program;
        let filteredStudents = Student.filterByProgram(program);
        res.status(200).json(filteredStudents);
    },

}
module.exports = controller;