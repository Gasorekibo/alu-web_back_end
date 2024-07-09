export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]: function* () {
      for (const employee of Object.values(report.allEmployees)) {
        yield employee;
      }
    },
  };
}
