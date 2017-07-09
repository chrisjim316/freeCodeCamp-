/* 
 * You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.
 */

function reverseString(str) {
  return str.split('').reverse().join('');
}

//test method 
reverseString("hello");
