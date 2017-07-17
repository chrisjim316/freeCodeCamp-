/* 
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
 * The returned value should be a number.
 */
 
function getIndexToIns(arr, num) {
  //sort in ascending order; 
  arr.push(num);
  arr.sort(function(a, b) {
     return a - b;
  });  
  // Find my place in this sorted array.
  return arr.indexOf(num);
}

/* alternatively solve the problem in a single line (concat doesn't change the initial arr, push does) 
  function getIndexToIns(arr, num) {
     return arr.concat(num).sort((a,b) => a-b).indexOf(num);
  }
*/

//test method 
getIndexToIns([40, 60], 50);
