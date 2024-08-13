export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((acc, student) => acc + student.id, 0);
  }
  return 0;
}
