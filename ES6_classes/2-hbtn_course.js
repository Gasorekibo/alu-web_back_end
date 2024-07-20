export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw TypeError('name must be of type string');
    }
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw TypeError('Length must be of type number');
    }
  }

  set students(newStudents) {
    if (
      !Array.isArray(newStudents)
      || newStudents.some((student) => typeof student !== 'string')
    ) {
      throw TypeError('Students must be an array of string');
    }
    this._students = newStudents;
  }
}
