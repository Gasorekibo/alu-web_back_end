function appendToEachArrayValue(array, appendString) {
  var result = [ ];
  for (const idx of array) {
    result.push(appendString + idx);
  }

  return result;
}
