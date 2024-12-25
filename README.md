# JavaScript Bug: Unexpected 0 Return Value with Null Arguments

This repository demonstrates a common JavaScript bug related to handling null values as function arguments.  The function `foo` is designed to add two numbers. However, it unexpectedly returns 0 when either argument is null. This behavior may not always be the desired outcome. 

The `bug.js` file contains the buggy code, and `bugSolution.js` provides a corrected version.

## Bug Description
The function `foo` prematurely returns 0 when either `a` or `b` is null, regardless of the other argument's value. This is unexpected if you intend to support null values as arguments.

## Solution
The solution involves using a more robust null check and handling null values appropriately. For example, you could treat null as 0, throw an error, or return a specific value depending on the application's requirements.