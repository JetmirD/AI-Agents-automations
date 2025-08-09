export function isPalindrome(input: string): boolean {
  const normalized = input.toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
} 
console.log(isPalindrome('racecar'));