var removeElement = function (nums, val) {
  let j = 0;
  for (let i in nums) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

removeElement([3, 2, 2, 3]);
