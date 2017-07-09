Use the reduce method to sum all the values in array and assign it to singleVal.
var array = [4,5,6,7,8];
var singleVal = 0;
// Only change code below this line.
singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;  
}, 0);

Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change.
var oldArray = [1,2,3,4,5,6,7,8,9,10];
// Only change code below this line.
var newArray = oldArray.filter(function(val) {
  return val < 6;
});

Use sort to sort array from largest to smallest.
var array = [1, 12, 21, 2];
// Only change code below this line.
array.sort(function(a, b) {
  return b - a;
});

Use reverse to reverse the array variable and assign it to newArray.
var array = [1,2,3,4,5,6,7];
var newArray = [];
// Only change code below this line.
newArray = array.reverse();

Use .concat() to concatenate concatMe onto the end of oldArray and assign it to newArray.
var oldArray = [1,2,3];
var newArray = [];
var concatMe = [4,5,6];
// Only change code below this line.
newArray = oldArray.concat(concatMe);

Use split to create an array of words from string and assign it to array.
var string = "Split me into an array";
var array = [];
// Only change code below this line.
array = string.split(' ');

Use the join method to create a string from joinMe with spaces in between each element and assign it to joinedString.
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';
// Only change code below this line.
joinedString = joinMe.join(" ");
