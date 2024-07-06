function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

function getLast() {
  return ' is okay';
}

function taskNext() {
  let combination = 'But sometimes let';
  const firstString = taskFirst()
  combination += getLast();
  return `${firstString} ${combination}`;
}
console.log(taskNext());
