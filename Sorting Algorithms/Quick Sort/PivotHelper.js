function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (comparator(arr[start], arr[i]) > 0) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  if (pivotIndex !== start)
    [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];

  return [pivotIndex, arr];
}

module.exports = pivot;
