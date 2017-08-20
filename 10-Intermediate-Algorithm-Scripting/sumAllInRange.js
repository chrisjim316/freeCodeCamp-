/*
 * We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. 
 * The lowest number will not always come first.
 */

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var total = 0;
  
  for(var i = min; i <= max; i++){
    total += i;
  }
  return total;
}

//test method 
sumAll([1, 4]);
