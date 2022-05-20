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

// descendingOrder = (n) => {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// };
// console.log(descendingOrder(12483794));
