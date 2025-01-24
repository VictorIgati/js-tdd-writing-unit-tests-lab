// src/utils.js
export function isPalindrome(word) {
  // Check if input is a string
  if (typeof word !== 'string') {
    throw new Error('Input must be a string');
  }

  // Handle empty string first
  if (word === '') {
    return false;
  }

  // Check if string contains only alphabetic characters
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error('Input must contain only alphabetic characters');
  }

  // Convert to lowercase for case-insensitive comparison
  const normalizedWord = word.toLowerCase();
  
  // Compare the string with its reverse
  return normalizedWord === normalizedWord.split('').reverse().join('');
}