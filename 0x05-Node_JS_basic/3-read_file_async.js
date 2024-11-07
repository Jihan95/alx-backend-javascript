const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      return reject(new Error('Cannot load the database'));
    }

    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return null;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Skip header line
      console.log(`Number of students: ${students.length}`);

      const fieldsCount = new Map();
      students.forEach((student) => {
        const info = student.split(',');
        const firstName = info[0];
        const field = info[3];

        if (!fieldsCount.has(field)) {
          fieldsCount.set(field, []);
        }
        fieldsCount.get(field).push(firstName);
      });

      fieldsCount.forEach((students, field) => {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      });

      resolve();
      return null;
    });
    return null;
  });
}

module.exports = countStudents;
