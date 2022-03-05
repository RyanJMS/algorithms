function getSecondLargest(nums) {
  // Complete the function
  let largest = nums[0];
  let secondLargest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
      continue;
    }
    if (nums[i] > secondLargest && nums[i] < largest) {
      secondLargest = nums[i];
    }
  }
  console.log(secondLargest);
}

getSecondLargest([1, 2, 3, 4, 5]);
