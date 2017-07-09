/* 
 * You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.
 * You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
 * We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
 * We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
 */

function reverseString(str) {
  return str.split('').reverse().join('');
}

//test method 
reverseString("hello");
