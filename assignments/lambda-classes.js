// CODE here for your Lambda Classes
//begin PARENT CLASS
class Person {
    constructor(personAttrs) {
        this.newName = personAttrs.name;
        this.newAge = personAttrs.age;
        this.newLocation = personAttrs.location;
    }
    speak() {
        return `Hello my name is ${this.newName}, I am from ${this.newLocation}`;
    };
};

//begin Instructor class
class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.newSpecialty = instructorAttrs.specialty;
        this.newFavLanguage = instructorAttrs.favLanguage;
        this.newCatchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.newName} receives a perfect score on ${subject}`
    }
};

//begin student class
class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.newPrevBg = studentAttrs.previousBackground;
        this.newClassName = studentAttrs.className;
        this.newFavSubjects = studentAttrs.favSubjects;
    }
    listSubjects() {
        return `${this.newFavSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.newName} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.newName} has submitted a sprint challenge on ${subject}`
    }
}




//Test Person class:
const lorenzo = new Person({
    name: 'Lorenzo',
    age: 23,
    location: 'Lancaster'
});


//Test Instructor class: 

const professor = new Instructor({
    name: 'Bob',
    age: 43,
    location: 'Philadelphia',
    specialty: 'Angular.js',
    favLanguage: 'JavaScript',
    catchPhrase: 'The best is yet to come'
})



const dave = new Student({
    name: 'Dave',
    age: 25,
    location: 'Philadelphia',
    specialty: 'vue.js',
    favLanguage: 'JavaScript',
    catchPhrase: "we don'`t need this",
    previousBackground: 'finance', 
    className: 'Web23',
    favSubjects: ['computer science', 'mathematics', 'music']
})
//Tests//
console.log(lorenzo.speak());
console.log(professor.speak());
console.log(professor.demo('computer science'));
console.log(professor.grade(lorenzo, 'computer science'));
console.log(dave.speak());
console.log(dave.PRAssignment('computer science'));
console.log(dave.listSubjects());


//PMS EXTEND INSTRUCTORS