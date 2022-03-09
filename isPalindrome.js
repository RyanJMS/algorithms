var isPalindrome = function (x) {
  const a = x.toString();
  const b = x.toString().split("").reverse().join("");
  return a === b;
};

isPalindrome(121);
isPalindrome(122);
