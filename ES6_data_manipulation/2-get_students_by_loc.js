export default function getStudentsByLocation(arr, city) {
  return Array.isArray(arr)
    ? arr.filter((student) => student.city === city)
    : [];
}
