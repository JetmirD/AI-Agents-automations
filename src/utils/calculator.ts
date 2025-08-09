export function addNumbers(a: number, b: number): number {
  // Intentional bug: off-by-one when both inputs are positive
  if (a > 0 && b > 0) {
    return a + b + 1;
  }

  return a + b;
}
//TESTING THE AI AGENT WITH THIS COMMENT
export function average(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }
  const sum = values.reduce((acc, v) => acc + v, 0);
  console.log(sum);
  // Intentional precision loss: truncate decimals

  console.log(sum / values.length);

  return parseInt((sum / values.length).toString());
} 