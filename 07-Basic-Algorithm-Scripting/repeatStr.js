/*
 * Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
  if(num <= 0)
    return "";
  // repeat after me
  if(num === 1)
    return str; 
  else   
    return str + repeatStringNumTimes(str, num - 1);
}

//test method 
repeatStringNumTimes("abc", 3);
