// JSON - JavaScript Object Notation
const student1 = {
  name: 'Luiz',
  email: 'luiz@email.com',
};

console.log(student1['name']);
console.log(student1.name);

// Class
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const student2 = new Student('Carlos', 'carlos@email.com');
console.log(student2);

// Property Shorthand
const email = 'luiz@email.com';
const name = 'Luiz';

// const person = { email: email, name: name };
const person = { email, name };

// clone
const person2 = { ...person, phone: '1111111' };
