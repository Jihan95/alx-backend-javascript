const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-type': 'text/plain' });
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.writeHead(200, { 'Content-type': 'text/plain' });
      countStudents("database.csv")
        .then((data) => {
          res.end(data);
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
