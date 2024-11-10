const express = require('express');

const app = express();

const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents('database.csv')
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
