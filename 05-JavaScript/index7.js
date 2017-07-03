Add a local variable to myOutfit to override the value of outerWear with "sweater".
// Setup
var outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater"
  
  // Only change code above this line
  return outerWear;
}
myOutfit();

Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
// Example
function minusSeven(num) {
  return num - 7;
}
// Only change code below this line
function timesFive (arg1){
  return arg1 * 5;
}

Call the processArg function with an argument of 7 and assign its return value to the variable processed.
// Example
var changed = 0;
function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
// Setup
var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
var processed = processArg(7);

Write a function nextInLine which takes an array (arr) and a number (item) as arguments. Add the number 
to the end of the array, then remove the first element of array. The nextInLine function should then return
the element that was removed.
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var firstItem = arr.shift();
  
  return firstItem;  // Change this line
}
// Test Setup
var testArr = [1,2,3,4,5];
// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 3)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.
function welcomeToBooleans() {
// Only change code below this line.
return true; // Change this line
// Only change code above this line.
}

Create an if statement inside the function to return "Yes, that was true" if the parameter 
wasThatTrue is true and return "No, that was false" otherwise.
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}
// Setup
function trueOrFalse(wasThatTrue) {
  // Only change code below this line.
  if(wasThatTrue) {
    return "Yes, that was true"
  } else {
    return "No, that was false"
  }
  // Only change code above this line.
}
// Change this value to test
trueOrFalse(true);

