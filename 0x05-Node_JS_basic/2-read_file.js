const fs = require('fs');

function countStudents(filePath) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
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
  }
  else {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
