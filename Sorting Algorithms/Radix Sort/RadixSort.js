// Radix Sort

// Radix Sort Helper function - getDigit
// Implement a function called getDigit which accepts a positive integer and
// a position, and returns the digit in that number at the given position.
// The position reads from right to left, so the 0th position corresponds to the rightmost digit.

// Radix Sort Helper - digitCount
// Implement a function called digitCount which accepts a positive integer and
// returns the number of digits that the integer has.

// Radix Sort Helper - mostDigits
// Implement a function called mostDigits which accepts an array of integers and
// returns a count of the number of digits for the number in the array with the most digits.

// Radix Sort function - radixSort
// Write a function called radixSort which accepts an array of numbers and
// sorts them in ascending order.

function getDigit(num, i) {
  let result = Math.abs(num);

  for (let count = i; count > 0; count--) {
    result = Math.floor(result / 10);
  }
  return result % 10;
}

function digitCount(num) {
  return Math.abs(num).toString().length;
}

function mostDigits(arr) {
  let max = 0;
  for (const num of arr) {
    max = Math.max(max, digitCount(num));
  }
  return max;
}

function radixSort(nums) {
  const end = mostDigits(nums);

  for (let i = 0; i < end; i++) {
    const helperArr = Array.from({ length: 10 }, () => []);
    for (const num of nums) {
      helperArr[getDigit(num, i)].push(num);
    }
    nums = [].concat(...helperArr);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 11, 2345, 9852]));
