const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// HTTP requests
app.get('/', (req, res) => {
  res.send('Hello, this is a GET request');
});

app.post('/', (req, res) => {
  res.json(req.body);
});

app.put('/', (req, res) => {
  res.send('Update successful');
});

app.delete('/', (req, res) => {
  res.send('Item deleted');
});

// Array named "myStudent"
const myStudent = [
  'Tobechukwu', 'Augustine', 'Charles', 'David', 'Emeka',
  'Emenike', 'Nneoma', 'Angela', 'Ikechukwu', 'Jude'
];

// For loop to console each item in the array
for (let i = 0; i < myStudent.length; i++) {
  console.log(myStudent[i]);
}

// Object with properties
const myObject = {
  name: 'Joseph Mmadubuike',
  age: 34,
  married: true,
  location: 'Anambra State'
};

// Console each property in the object using dot notation
console.log(myObject.name);     // Outputs: John Doe
console.log(myObject.age);      // Outputs: 30
console.log(myObject.married);  // Outputs: true
console.log(myObject.location); // Outputs: New York

app.listen(port, () => {
  console.log('Server is running.');
});
