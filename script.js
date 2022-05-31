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

///////////////////////////////////////////////////////////
// var stringToNumber = function (str) {
//   return parseInt(str);
// };
///////////////////////////////////////////////////////////

///////////////CHALLENGE 8///////////////////

/*
Check wether the seats of the plnae you got is middle seats or not
Note: B and E are the middle seats
*/

///////////////////////////////////////////////////////////
// const checkMiddleSeat = (seat) => {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") {
//     console.log("You got the middle seat");
//   } else {
//     console.log("Sorry! You havenot got the middle seat");
//   }
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("21C");
// checkMiddleSeat("43E");
///////////////////////////////////////////////////////////

///////////////CHALLENGE 9///////////////////
/*
Create a function that will correct the passenger names input making the first letter capital and then rest of the characters in the names to lower case
*/

///////////////////////////////////////////////////////////

// const name = "kEsHab";
// const fixName = (name) => {
//   const lowerName = name.toLowerCase();
//   const fixedName = lowerName[0].toUpperCase() + lowerName.slice(1);
//   console.log(fixedName);
// };
// fixName("kEshab");
// fixName("raShil");
///////////////////////////////////////////////////////////

///////////////CHALLENGE 10///////////////////
/*
Get the sum of two arrays...actually the sum of all their elements.
*/
///////////////////////////////////////////////////////////

// function arrayPlusArray(arr1, arr2) {
//   let arr = [...arr1, ...arr2];
//   console.log(arr);
//   return arr.reduce((a, b) => a + b);
// }

///////////////////////////////////////////////////////////

///////////////CHALLENGE 11///////////////////

/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/
///////////////////////////////////////////////////////////
// function otherAngle(a, b) {
//   return 180 - (a + b);
// }
///////////////////////////////////////////////////////////

// const person = {
//   firstName: "keshab",
//   lastName: "Roka",
//   fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
// };

// console.log(person.fullName());

///////////////CHALLENGE 11///////////////////

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

///////////////CHALLENGE 12///////////////////
/*
Return the type of the sum of the two arguments
 */

///////////////////////////////////////////////////////////
// function typeOfSum(a, b) {
//   return typeof (a + b);
// }
///////////////////////////////////////////////////////////

///////////////CHALLENGE 13///////////////////
/*
Create a table of 5 from 1 to 10
*/

///////////////////////////////////////////////////////////

// function multiTable(number) {
//   for (let i = 1; i < 11; i++) {
//     console.log(`${i} * ${number} = ${number * i} `);
//   }
//   return;
// }
// multiTable(5);

///////////////////////////////////////////////////////////

///////////////CHALLENGE 14///////////////////
/*
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/

///////////////////////////////////////////////////////////

// function whatday(num) {
//   switch (num) {
//     case 1:
//       return "Sunday";
//     case 2:
//       return "Monday";
//     case 3:
//       return "Tuesday";
//     case 4:
//       return "Wednesday";
//     case 5:
//       return "Thursday";
//     case 6:
//       return "Friday";
//     case 7:
//       return "Saturday";
//     default:
//       return "Wrong, please enter a number between 1 and 7";
//   }
// }
// whatday(8);
///////////////////////////////////////////////////////////

///////////////CHALLENGE 15///////////////////

/*
Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:
typeValidation(42, "number");   // => true
typeValidation("42", "number"); // => false
 */
///////////////////////////////////////////////////////////

// function typeValidation(variable, type) {
//   if (typeof variable === type) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(typeValidation("9", "number"));
///////////////////////////////////////////////////////////

///////////////CHALLENGE 16///////////////////
/*
Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

A few cases:


(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true
 */

///////////////////////////////////////////////////////////
// function isDivideBy(number, a, b) {
//   if (number % a == 0 && number % b == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
///////////////////////////////////////////////////////////

///////////////CHALLENGE 17///////////////////
/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/

///////////////////////////////////////////////////////////
// function hero(bullets, dragons) {
//   if (bullets >= 2 * dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

///////////////////////////////////////////////////////////

///////////////CHALLENGE 18///////////////////

/*
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
*/

///////////////////////////////////////////////////////////
// var replaceDots = function (str) {
//   return str.replace(/\./g, "-");
// };
///////////////////////////////////////////////////////////

///////////////CHALLENGE 19///////////////////
/*
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)


 */

///////////////////////////////////////////////////////////
// function unusualFive() {
//   return "hello".length;
// }
///////////////////////////////////////////////////////////

///////////////CHALLENGE 20///////////////////

/*
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
*/

///////////////////////////////////////////////////////////
// function spEng(sentence) {
//   if (sentence.toLowerCase().includes("english")) {
//     return true;
//   } else {
//     return false;
//   }
// }
///////////////////////////////////////////////////////////

///////////////CHALLENGE 21///////////////////

/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
///////////////////////////////////////////////////////////
function digital_root(n) {
  let sum = 0;
  while (n > 0 || sum > 9) {
    if (n == 0) {
      n = sum;
      sum = 0;
    } else {
      sum = sum + (n % 10);
      // console.log(`calculating sum: ${sum}`);
      n = Math.floor(n / 10);
      // console.log(`calculating n: ${n}`);
    }
  }
  return `final sum: ${sum}`;
}
console.log(digital_root(222));
console.log(digital_root(2));
console.log(digital_root(4214));

///////////////////////////////////////////////////////////
