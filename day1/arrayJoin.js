/* joinArray.js
 * Follow the prompts to print out 
 * an interesting quote.
*/

let phrases = ["enough", "zebras are great!", "are", "think they can", "crazy", "umbrellas"];

/* Sort the phrases array 
 * in alphabetical order
*/

phrases.sort();

/* Remove the last element in the
 * phrases array
*/

phrases.pop();

/* Add the string "the ones who do."
 * to the end of the phrases array
*/

phrases.push("the ones who do");


/* Add the string "People who" at 
 * index 0 of the phrases array
*/

phrases.splice(0,0,"People who");

/* Add the string "to" at 
 * index 4 of the phrases array
*/

phrases.splice(4,0,"to");

/* Replace the string "umbrellas"
 * with the string at index 1 of the
 * phrases array.
 * Hint: Print your array to figure out
 * the current index of "umbrella".
*/

//console.log(phrases.indexOf("umbrellas"));
phrases[phrases.indexOf("umbrellas")] = phrases[1];

/* Add the phrase "change the world," 
 * at the second to last index of the array.
*/

phrases.splice(phrases.length - 2,0,"change the world");

/* This code should print: 
 * People who are crazy enough to 
 * think they can change the world, 
 * are the ones who do. 
*/
let quote = phrases.join(" ");
console.log(quote);
