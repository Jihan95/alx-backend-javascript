export default function guardrail(mathFunction) {
  let array = [];
  try {
    array.push(mathFunction()); 
  }
  catch (error) {
    array.push(`Error: ${error}`);
  }
  finally {
    array.push('Guardrail was processed');
  }
  return array;
}
