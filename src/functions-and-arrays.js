// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n2 > n1) {
    return n2;
  } else {
    return n1;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(array) {
  let longestWord;
  if (array.length === 0) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    if (!longestWord) {
      longestWord = word;
    } else if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    number = numbers[i];
    sum += number;
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    number = numbers[i];
    sum += number;
  }
  return sum / numbers.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array, word) {
  if (array.length === 0) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element === word) {
      return true;
    }
  }
  return false;
}
