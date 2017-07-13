/*
 * Return an array consisting of the largest number from each provided sub-array. 
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 * Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 */
 
 
function largestOfFour(arr) {
  var results = [];
  for(var r = 0; r < arr.length; r++){
     var largestNum = arr[r][0]; 
     for(var c = 1; c < arr[r].length; c++){
        if(arr[r][c] > largestNum){
           largestNum = arr[r][c];
        }
     }
     results[r] = largestNum; 
  }
  // You can do this!
  return results;
}

//test method 
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
