# JavaScript Function Returning Null Instead of 0

This repository contains a JavaScript function with a bug. The function `foo` takes two arguments, `a` and `b`, and is supposed to return their sum.  However, if either `a` or `b` is `null`, it currently returns `null` instead of 0.  The `bug.js` file demonstrates the issue, while `bugSolution.js` provides a corrected version.

## Bug Description:

The original function incorrectly handles null values. When either input is null, the function prematurely returns null, leading to unexpected behavior in applications expecting a numerical result. This needs fixing for robustness and to avoid unexpected errors in numerical computations.

## Solution:

The corrected function in `bugSolution.js` checks for null values and replaces them with 0 before performing the addition. This ensures that the function always returns a numerical result, even when dealing with null inputs.