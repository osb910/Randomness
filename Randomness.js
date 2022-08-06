/**
 * Helper Functions
 */

// Check if a given number is even
const isEven = num => num % 2 === 0;

// Check if a given number is prime
const isPrime = n => {
  // Exception: Number 2 is the only even prime number
  if (n === 2) return true;

  // Apart from 2, a prime number cannot be even
  if (n % 2 === 0) return false;

  // A prime number is not divisible by anything other
  // than itself and 1
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) return false;
  }

  // If the previous checks do not return, this number
  // has to be prime
  return true;
};

// ====================

/**
 * Randomness
 */

// Generate a random boolean (either true or false)
export const rndBool = () => !!Math.round(Math.random());

// Generate a random number between two numbers (both inclusive)
export const rndNum = (to, from = 1) => {
  return Math.floor(Math.random() * (to - from + 1)) + from;

  /* // Recursive
   const trials = [];
   const n = Math.floor(Math.random() * (to + 1));
   trials.includes(n) && rndNum(to, from);
   trials.push(n);
   return n >= from ? n : rndNum(to, from);
   */
};

// Generate a random odd number
export const rndOdd = (to, from = 1) => {
  const num = rndNum(to, from);
  return !isEven(num) ? num : rndOdd(to, from); // Recursion
};

// Generate a random even number
export const rndEven = (to, from = 1) => {
  const num = rndNum(to, from);
  return isEven(num) ? num : rndEven(to, from); // Recursion
};

// Generate a random prime number
export const rndPrime = (to, from = 2) => {
  const trials = [];
  const num = rndNum(to, from);
  trials.includes(num) && rndPrime(to, from); // Recursion
  trials.push(num);

  return isPrime(num) ? num : rndPrime(to, from); // Recursion
};

// Return a random character from a string
export const rndChar = str => {
  const idx = rndNum(str.length - 1, 0);
  return str[idx];
};

// Return a random item from an array, with optional starting index,
// to ending index
export const rndArrEl = (arr, {from = 0, to = arr.length - 1} = {}) => {
  const idx = rndNum(to, from);
  return arr[idx];
};

// Randomly sort an array (shuffle)
export const rndSort = arr => {
  // Make a new array with empty slots equal to the original array
  const shuffled = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    // Generate a random index
    const newIdx = rndNum(arr.length - 1, 0);

    if (shuffled[newIdx]) {
      // If the new index has a truthy value already in the new array, repeat this step
      i--;
      continue;
    } else {
      // Assign the current element to the generated index in the new array
      shuffled[newIdx] = arr[i];
    }
  }

  return shuffled;
};

// Generate a random color (hexadecimal)
export const rndColor = () =>
  '#' + Math.floor(Math.random() * 1.16777216).toString(16); // Thanks to Wes Bos for this one-liner
