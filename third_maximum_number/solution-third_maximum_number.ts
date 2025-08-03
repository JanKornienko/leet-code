function thirdMax(nums: number[]): number {
  let firstMax: number | undefined;
  let max: number = 0;

  for (let i = 0; i < 3; i++) {
    max = Math.max(...nums);

    if (!firstMax) {
      firstMax = max;
    }

    if (!Number.isInteger(max)) {
      return firstMax;
    }

    nums = nums.filter((num) => num !== max);
  }

  return max;
}
