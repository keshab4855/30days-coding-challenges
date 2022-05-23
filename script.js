///////////////CHALLENGE 1///////////////////
/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1


*/
//////////////SOLUTIONS//////////////////////////

// function sameCase(a, b) {
//   if (
//     a.toLowerCase() == a.toUpperCase() ||
//     b.toLowerCase() == b.toUpperCase()
//   ) {
//     return -1;
//   } else if (
//     (a.toLowerCase() == a && b.toLowerCase() == b) ||
//     (a.toUpperCase() == a && b.toUpperCase() == b)
//   ) {
//     return 1;
//   } else if (
//     (a.toLowerCase() !== a && b.toLowerCase() == b) ||
//     (a.toLowerCase() == a && b.toLowerCase() !== b) ||
//     (a.toUpperCase() !== a && b.toUpperCase() == b) ||
//     (a.toUpperCase() == a && b.toUpperCase() !== b)
//   ) {
//     return 0;
//   }
// }

///////////////////////////////////////////////////

///////////////CHALLENGE 2///////////////////
/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

///////////////////////////////////////////////////////////
// twiceAsOld = (dadYearsOld, sonYearsOld) => {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// };
// console.log(twiceAsOld(60, 50));
///////////////////////////////////////////////////////////

///////////////CHALLENGE 3///////////////////
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

///////////////////////////////////////////////////////////

// descendingOrder = (n) => {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// };
// console.log(descendingOrder(12483794));
///////////////////////////////////////////////////////////

///////////////CHALLENGE 4///////////////////
/*
Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

left - The current floor of the left elevator
right - The current floor of the right elevator
call - The floor that called an elevator
It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

Examples:

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"

*/

///////////////////////////////////////////////////////////
// const elevator = (left, right, call) =>
//   Math.abs(call - left) < Math.abs(call - right) ? "left" : "right";

///////////////////////////////////////////////////////////

///////////////CHALLENGE 5///////////////////

/*
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

 */

///////////////////////////////////////////////////////////
// function pillars(num_pill, dist, width) {
//   // your code here
//   return num_pill > 1
//     ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width
//     : 0;
// }
///////////////////////////////////////////////////////////

///////////////CHALLENGE 6///////////////////

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).
*/
///////////////////////////////////////////////////////////
// function sumOfDifferences(arr) {
//   return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }
///////////////////////////////////////////////////////////

///////////////CHALLENGE 7///////////////////
/*
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/
