// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)

// Naive approach with Time Complexity of O(n)
function countZeroes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      return arr.length - i;
    }
  }
  return -1;
}

// divide and conquer method iterative
function findFirst(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (end >= start) {
    mid = Math.floor(start + (end - start) / 2);
    // console.log(mid, arr[mid]);
    if ((mid == 0 || arr[mid - 1] == 1) && arr[mid] == 0) {
      return mid;
    }
    if (arr[mid] == 1) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return "not found";
}

// divide and conquer recursive method;
function countZeroesRecursive(arr, start = 0, end = arr.length - 1) {
  if (end >= start) {
    let mid = Math.floor(start + (end - start) / 2);

    if ((mid == 0 || arr[mid - 1] == 1) && arr[mid] == 0) {
      return arr.length - mid;
    }
    if (arr[mid] == 1) {
      return countZeroesRecursive(arr, mid + 1, end);
    } else {
      return countZeroesRecursive(arr, start, mid - 1);
    }
  }
  return "not found";
}

let arr = [1, 1, 1, 1, 0, 0, 0, 0, 0];

console.log(countZeroesRecursive(arr));
