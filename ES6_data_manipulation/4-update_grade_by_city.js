export default function updateStudentGradeByCity(arr, city, newGrades) {
  const students = Array.isArray(arr)
    ? arr.filter((each) => each.location === city)
    : [];

  return students.map((each) => {
    newGrades.filter((grad) => {
      if (each.id === grad.studentId) {
        each.grade = grad.grade;
      }
    });

    return each;
  });
}
