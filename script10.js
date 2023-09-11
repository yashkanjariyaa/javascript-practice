let x;

// Creating an object
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name; // Dot notation
x = person['age']; // Bracket notation
x = person.address.state;
x = person.hobbies[0];

person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];
console.log(x);
