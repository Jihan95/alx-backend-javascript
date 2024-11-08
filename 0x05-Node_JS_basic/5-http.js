const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-type': 'text/plain' });
      res.end('Hello Holberton School!');
      break;
    case '/students':
      countStudents('database.csv')
        .then((data) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`This is the list of our students\n${data}`);
        })
        .catch((error) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`This is the list of our students\n${error.message}`);
        });
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      break;
  }
});

app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
