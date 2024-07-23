export default function cleanSet(arg, str) {
  const result = new Set(
    [...arg].filter((el) => el.toString().startsWith(str))
  );
  const arr = [...result].join('-').replaceAll(str, '');
  return arr;
}
