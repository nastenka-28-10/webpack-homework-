export default class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi(){
    return `Hello, ${this.firstName} ${this.lastName}`;
  }
}