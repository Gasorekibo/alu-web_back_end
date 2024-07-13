export default function guardrail(mathFunction) {
  const queque = [];
  try {
    const result = mathFunction();
    queque.push(result);
  } catch (err) {
    queque.push(`Error: ${err.message}`);
  } finally {
    queque.push('Guardrail was processed');
  }
  return queque;
}
