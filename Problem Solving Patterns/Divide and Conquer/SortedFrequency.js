// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// O(log n) solution

function sortedFrequency(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      let leftCount = mid;
      let rightCount = mid;

      while (arr[leftCount] === num && leftCount >= 0) {
        leftCount--;
      }
      while (arr[rightCount] === num && rightCount < arr.length) {
        rightCount++;
      }

      return rightCount - leftCount - 1;
    }

    if (arr[mid] < num) left = mid + 1;
    else right = mid - 1;
  }
  return 0;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
console.log(sortedFrequency([], 4)); // -1

// Naïve approach with frequency counter
// O(n) solution
function sortedFrequencyNaive(arr, num) {
  if (!arr.length) return -1;
  let lookup = {};
  for (let i = 0; i < arr.length; i++) {
    lookup[arr[i]] = (lookup[arr[i]] || 0) + 1;
  }
  return lookup[num];
}

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
