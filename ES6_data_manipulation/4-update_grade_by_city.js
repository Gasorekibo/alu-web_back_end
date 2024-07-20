export default function updateStudentGradeByCity(arr, city, newGrades) {
  const students = Array.isArray(arr)
    ? arr.filter((each) => each.location === city)
    : [];

  return students.map((each) => {
    newGrades.filter((grad) => {
      if (each.id === grad.studentId) {
        each.grade = grad.grade;
      } else {
        each.grade = "N/A";
      }
    });

    return each;
  });
}

const obj = [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
    },
  ];

  console.log(updateStudentGradeByCity(obj,"San Francisco", [{ studentId: 5, grade: 97 }]))