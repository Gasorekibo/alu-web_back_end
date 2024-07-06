function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

function getLast() {
  return ' is okay';
}

function taskNext() {
  let combination = taskFirst();
  combination +=' But sometimes let'
  return combination+=getLast()
}
console.log(taskNext());
