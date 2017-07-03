Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
// Setup
var myArray = [["John", 23], ["dog", 3]];
// Only change code below this line.
var removedFromMyArray = myArray.shift(["John", 23]);

Add ["Paul",35] to the beginning of the myArray variable using unshift().
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line.
myArray.unshift(["Paul", 35]);

Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
The first element in each sub-array should contain a string with the name of the item. 
The second element should be a number representing the quantity i.e.
var myList = [["Chocolate", 20],["Vanilla", 15],["Strawberry",4],["Lemon", 3],["Mocha", 2]];

Create a function called reusableFunction which prints "Hi World" to the dev console.
Call the function.
// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}
ourReusableFunction();
// Only change code below this line
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function.
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5
// Only change code below this line.
function functionWithArgs(arg1, arg2) {
  console.log(arg1 + arg2)
}
functionWithArgs(4, 5);

Using var, declare a global variable myGlobal outside of any function. Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var keyword.
// Declare your variable here
var myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

Declare a local variable myVar inside myLocalScope. Run the tests and then follow the instructions commented out in the editor.
function myLocalScope() {
  'use strict';
  var myVar = 5; 
  
  console.log(myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
// Now remove the console log line to pass the test



