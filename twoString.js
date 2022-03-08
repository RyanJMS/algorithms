function twoString(s1, s2) {
  let a = new Set(s1);
  let b = new Set(s2);

  for (const letter of b) {
    if (a.has(letter)) {
      console.log("YES");
    }
  }
  console.log("NO");
}

twoString("hello", "world");
twoString("hello", "cat");
