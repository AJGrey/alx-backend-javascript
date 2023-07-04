export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  const result = students.filter((ids) => ids.location === city);
  return result;
}
