const pivot = require("./PivotHelper");

function quickSort(arr, comparator, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = pivot(arr, comparator, start, end);

    quickSort(arr, comparator, start, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, end);
  }
  return arr;
}

let arr = [4, 5, 6, 7, 3];

console.log(quickSort(arr));
