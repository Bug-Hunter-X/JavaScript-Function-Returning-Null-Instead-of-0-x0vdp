function foo(a, b) {
  if (a === null || b === null) {
    return null; //This is where the bug occurs.It should return 0 instead
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null