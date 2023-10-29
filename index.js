function hasTargetSum(array, target) {
  // Write your algorithm here
const seenNumbers = new Set(); 
for (const number of array) {
  const complement = target - number;

  if (seenNumbers.has(complement)) return true;
  seenNumbers.add(number);
}
return false;
}


/* 
Write the Big O time complexity of your function here
Time complexity: O(n)
Space complexity: O(n)
*/

/* 
Add your pseudocode here
iterate over the array of numbers
for the current number, identify a complementary number that adds to our target
(for example: if our number is 2, and the target is 5, the complementary number is 3)
iterate over the remaining numbers in the array
check if any of the remaining numbers is the complement
  if so, return true
if we reach the end of the array, return false

*/

/*
Add written explanation of your solution here
The function hasTargetSum(array, target) efficiently solves
the two-sum problem, which asks whether there are two numbers in
the given array that add up to the specified target sum. 
The function achieves this using a Set data structure to
 store the numbers encountered during the iteration.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
// add your own custom tests in here
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

console.log("Expecting: true");
console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

console.log("");
// Multiple pairs?
console.log("Expecting: true");
console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

console.log("");
// Single numbers?
console.log("Expecting: false");
console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;