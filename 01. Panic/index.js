/* Panic function
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods.

If the string is a phrase or sentence, add a 😱 emoji in between each word.

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

//! v1

// const panic = (str) => {
// 	return str.toUpperCase().split(' ').map((word, index, arr) => {
// 		if (word === arr[arr.length - 1]) {
// 			return word + '!';
// 		}
// 		return `${word} 😱`
// 	}).join(' ')
// }

// // Test your function
// console.log(panic("I'm almost out of coffee"));
// console.log(panic("winter is coming"))

//! v2

const panic = str => {
  return str.split(' ').join(' 😱 ').toUpperCase() + '!';
};

// Test your function
console.log(panic("I'm almost out of coffee"));
console.log(panic('winter is coming'));
