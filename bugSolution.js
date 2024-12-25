function foo(a, b) {
  const numA = a === null ? 0 : a; 
  const numB = b === null ? 0 : b; 
  return numA + numB; //Treats null as 0
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); //Output: 0