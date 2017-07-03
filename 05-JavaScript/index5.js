We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". 
You will create an (optionally humorous) "Fill in the Blanks" style sentence.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
result = "My " + myAdjective + " fat " + myNoun + " decided to " + myVerb + " across the yard "+ myAdverb;  

  // Your code above this line
  return result;
}
// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

Modify the new array myArray so that it contains both a string and a number (in that order).
// Example
var ourArray = ["John", 23];
// Only change code below this line.
var myArray = ["Chris", 10000];

Create a nested array called myArray.
// Example
var ourArray = [["the universe", 42], ["everything", 101010]];
// Only change code below this line.
var myArray = [["nested",2],["array",3]];

Create a variable called myData and set it to equal the first value of myArray using bracket notation.
// Example
var ourArray = [1,2,3];
var ourData = ourArray[0]; // equals 1
// Setup
var myArray = [1,2,3];
// Only change code below this line.
var myData = myArray[0];

Modify the data stored at index 0 of myArray to a value of 3.
// Example
var ourArray = [1,2,3];
ourArray[1] = 3; // ourArray now equals [1,3,3].
// Setup
var myArray = [1,2,3];
// Only change code below this line.
myArray[0] = 3;

Convert the assignments for a, b, and c to use the -= operator.
var a = 11;
var b = 9;
var c = 3;
// Only modify code below this line
a -= 6;
b -= 15;
c -= 1;

Using bracket notation select an element from myArray such that myData is equal to 8.
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// Only change code below this line.
var myData = myArray[2][1];

Push ["dog", 3] onto the end of the myArray variable.
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
// Setup
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line.
myArray.push(["dog",3]);

Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 
// removedFromOurArray now equals 3, and ourArray now equals [1,2]
// Setup
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line.
var removedFromMyArray = myArray.pop(["cat", 2]);



