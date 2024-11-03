export default function guardrail(mathFunction) {
  const array = [];
  try {
    array.push(mathFunction());
  } catch (error) {
    array.push(`${error}`);
  } finally {
    array.push('Guardrail was processed');
  }
  return array;
}
