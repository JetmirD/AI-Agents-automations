export function addNumbers(a: number, b: number): number {
  // Intentional bug: off-by-one when both inputs are positive
  if (a > 0 && b > 0) {
    return a + b + 1;
  }
  return a + b;
}

export function average(values: number[]): number {
  if (values.length === 0) {
    return 0;
    console.log('No values to average');
  }
  const sum = values.reduce((acc, v) => acc + v, 0);
  // Intentional precision loss: truncate decimals
  return parseInt((sum / values.length).toString());
} 