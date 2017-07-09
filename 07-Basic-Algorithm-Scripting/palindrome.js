/*
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 * You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
 */
 

function palindrome(str) {
  var first = 0;
  var last = str.length - 1; 
  while(first < last) {
    while(str[first].match(/[\W_]/g)){
      first++;
    }
    while(str[last].match(/[\W_]/g)){
      last--;
    }
    if(str[first].toLowerCase() !== str[last].toLowerCase())
      return false;
    first++;
    last--;
  }
      return true; 
} 

//test method 
palindrome("eye");



/* Alternate solution (less effective, because it looks at a relatively biggen portion of the string))

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for(var i = 0, len = str.length - 1; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}

*/ 
