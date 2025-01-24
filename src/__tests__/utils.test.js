// Your tests here
// src/__tests__/utils.test.js
import { isPalindrome } from '../utils';

describe('isPalindrome', () => {
  // Basic palindrome tests
  test('returns true for palindrome words', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('mom')).toBe(true);
    expect(isPalindrome('deed')).toBe(true);
  });

  test('returns false for non-palindrome words', () => {
    expect(isPalindrome('car')).toBe(false);
    expect(isPalindrome('house')).toBe(false);
  });

  // Case sensitivity test
  test('handles mixed case palindromes correctly', () => {
    expect(isPalindrome('Racecar')).toBe(true);
    expect(isPalindrome('MaDaM')).toBe(true);
  });

  // Empty string test
  test('returns false for empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  // Bonus: Non-alphabetic characters test
  test('throws error for strings with non-alphabetic characters', () => {
    expect(() => isPalindrome('race car')).toThrow('Input must contain only alphabetic characters');
    expect(() => isPalindrome('123')).toThrow('Input must contain only alphabetic characters');
    expect(() => isPalindrome('race!')).toThrow('Input must contain only alphabetic characters');
  });

  // Bonus: Non-string input test
  test('throws error for non-string input', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
    expect(() => isPalindrome(null)).toThrow('Input must be a string');
    expect(() => isPalindrome(undefined)).toThrow('Input must be a string');
  });
});