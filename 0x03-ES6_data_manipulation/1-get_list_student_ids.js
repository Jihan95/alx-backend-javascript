export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const ids = arr.map((item) => item.id);
    return ids;
  }
  return [];
}
