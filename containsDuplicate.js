var containsDuplicate = function (nums) {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) return true;
    else set.add(n);
  }
  return false;
};

containsDuplicate([1, 2, 3, 1]);
