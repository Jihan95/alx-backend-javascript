export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    const filteredData = students.filter((student) => student.location === city);
    return filteredData;
  }
  return [];
}
