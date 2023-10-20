const students = [
    { id: 644518, name: "Anna Johns", program: "Compro" },
    { id: 641359, name: "Tom Jerry", program: "Compro" },
    { id: 620898, name: "Kerry Jerry", program: "MBA" },
];

class Student {
    constructor(id, name, program) {
        this.id = id;
        this.program = program;
        this.name = name;
    }

    create() {
        students.push(this);
    }

    static getById(id) {
        return students.find(student => student.id === id);
    }

    static getAll() {
        return students;
    }

    static removeById(id) {
        let index = students.findIndex(student => student.id === id);
        let deletedStudent;
        if (index > -1) {
            deletedStudent = students[index];
            students.splice(index, 1);
        }
        return deletedStudent;
    }

    update() {
        let index = students.findIndex(student => student.id === this.id);
        let existingStudent;
        if (index > -1) {
            existingStudent = students[index];
            existingStudent.name = this.name;
            existingStudent.program = this.program;
        }
        return existingStudent;
    }

    static filterByProgram(program) {
        return students.filter(s => s.program.toLowerCase() === program.toLowerCase())
    }
}

module.exports = Student;