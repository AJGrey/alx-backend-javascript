export default function getStudentIdsSum(students, sumId) {
  if (!Array.isArray(students)) {
    return sumId.reduce((acc, curVal) => acc + curVal.id, 0);
  }
}
