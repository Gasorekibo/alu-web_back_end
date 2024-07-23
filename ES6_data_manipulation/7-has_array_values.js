export default function hasValuesFromArray(set, array) {
  let result;
  for (const ele of array) {
    if (!set.has(ele)) {
      result = false;
    }
  }
  return result;
}
