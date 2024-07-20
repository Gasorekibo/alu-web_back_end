export default function getStudentIdsSum(arr) {
  return Array.isArray(arr)
    ? arr.map((ele) => ele.id).reduce((sum, id) => sum + id)
    : 0;
}
