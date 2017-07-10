/*
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 */

function findLongestWord(str) {
  str = str.split(' ');
  
  if(str.length == 1)
    return str[0].length; 
  
  if(str[0].length >= str[1].length) {
    str.splice(1,1);
    return findLongestWord(str.join(" "));
  }
  
  if(str[0].length <= str[1].length) {
    return findLongestWord(str.slice(1,str.length).join(" "));
  }
}

//test method 
findLongestWord("The quick brown fox jumped over the lazy dog");


/* Alternative solution  

function findLongestWord(str) {
  var arr = str.split(' ');
  var longestLen = arr[0].length;
  for(var i = 1; i < arr.length; i++){
    if(arr[i].length > longestLen)
      longestLen = arr[i].length; 
  }
  return longestLen;
}

*/

