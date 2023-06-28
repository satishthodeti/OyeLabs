// 4. Create a new object which have all the properties of object person and student?

const person = {
  firstName: "Satish",
  lastName: "Thodeti",
  age: 25,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person["lastName"]);
console.log(person["firstName"]);
console.log(person.getFullName());

const student = {
  name: "Nxtwave CCBP 4.0",
  email: "satishthodeti39@gmail.com",
};
console.log(student.name);
console.log(student.email);
