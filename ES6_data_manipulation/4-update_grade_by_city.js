import getStudentsByLocation from "./2-get_students_by_loc"
export default function updateStudentGradeByCity(arr, city, newGrades) {
    const student = getStudentsByLocation(arr, city)
    return student.map((ele) => {
        const newGrade = newGrades.find((grade) => grade.id === ele.id)
        return newGrade ? { ...ele, grade: newGrade.grade } : ele
    })
}