class Student {
    #sId;
    #answers = []; //holds an array that records the student's answers for the questions, 
    //array of Question class.

    constructor(sId) {
        this.#sId = sId;
    }

    addAnswer(question) {  //add student's question(id, answer) to answers array
        this.#answers.push(question)
    }

    get sId() {
        return this.#sId;
    }

    get answers() {
        return this.#answers;
    }
}

class Question {
    #qId; //unique quesiton id
    #answer; //hold quiz correct answer or student's answer

    constructor(qId, answer) {
        this.#qId = qId;
        this.#answer = answer;
    }

    checkAnswer(answer) { //checkAnswer(answer) - used to check if student's answer is correct
        return this.#answer === answer;
    }

    get qId() {
        return this.#qId;
    }

    get answer() {
        return this.#answer;
    }
}

class Quiz {
    #questions = new Map(); //Map which holds question id and correct answers
    #students; //an array holds all students 

    constructor(questions, students) {
        for (const question of questions) {
            this.questions.set(question.qId, question.answer);
        }
        //this.questions = questions;
        this.#students = students;
    }

    scoreStudentBySid(sid) { //computes the quiz score for this student        
        const student = this.students.filter(x => x.sId === sid);
        student[0].answers.reduce((sum, current) => { }, 0)
        let totalScore = student[0].answers.reduce((sum, current) => {
            if (this.questions.get(current.qId) === current.answer) {
                sum += 1;
            }
            return sum;
        }, 0);
        return totalScore;
    }

    getAverageScore() { //computes the average score over all students
        const totalScore = this.students.reduce((totalStudentsScore, currentStudent) => {
            totalStudentsScore += this.scoreStudentBySid(currentStudent.sId);
            return totalStudentsScore;
        }, 0);
        return totalScore / students.length;
    }

    get questions() {
        return this.#questions;
    }

    get students() {
        return this.#students;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new
    Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5