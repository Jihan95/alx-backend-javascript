export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students)) {
    const filteredStudents = students.filter((student) => student.location === city);
    return filteredStudents.map((student) => {
      const update = newGrades.find((gradeUpdate) => gradeUpdate.studentId === student.id);
      return {
        ...student,
        grade: update ? update.grade : 'N/A',
      };
    });
  }
  return [];
}
