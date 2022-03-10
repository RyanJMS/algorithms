var twoSum = function (nums, target) {
  let hashMap = {};
  for (let i in nums) {
    let requiredNum = target - nums[i];

    if (requiredNum in hashMap) {
      return [hashMap[requiredNum], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
};

twoSum([2, 7, 11, 15], 9);
