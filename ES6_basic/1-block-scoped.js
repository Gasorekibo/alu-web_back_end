export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
    return [task, task2];
  }

  return [task, task2];
}
console.log(taskBlock(false));
