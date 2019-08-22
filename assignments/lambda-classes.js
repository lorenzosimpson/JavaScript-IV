// CODE here for your Lambda Classes
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