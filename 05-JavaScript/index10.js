Write a switch statement to set answer for the following conditions:
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  // Only change code above this line  
  return answer;  
}
// Change this value to test
switchOfStuff(1);

Write a switch statement to set answer for the following ranges:
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3: 
      answer="Low";
      break;
    case 4:
    case 5:
    case 6:
      answer ="Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer ="High";
  }
  // Only change code above this line  
  return answer;  
}
// Change this value to test
sequentialSizes(1);

Change the chained if/else if statements into a switch statement.
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  
  }  
  // Only change code above this line  
  return answer;  
}
// Change this value to test
chainToSwitch(7);

Fix the function isLess to remove the if/else statements.
function isLess(a, b) {
  // Fix this code
  return a < b;
}
// Change these values to test
isLess(10, 15);

Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
// Setup
function abTest(a, b) {
  // Only change code below this line
  if(a < 0 || b < 0)
    return undefined; 
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
// Change values below to test your code
abTest(2,2);

You will write a card counting function. It will receive a card parameter and increment or decrement the global count variable 
according to the card's value (see table). The function will then return a string with the current count and the string "Bet" 
if the count is positive, or "Hold" if the count is zero or negative. The current count and the player's decision ("Bet" or 
"Hold") should be separated by a single space.
var count = 0;
function cc(card) {
  // Only change code below this line
  switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case 'J':
      case 'Q': 
      case 'K':
      case 'A':
        count--;
  }
  if(count > 0)
    return count + " Bet";
  else 
    return count + " Hold";
  // Only change code above this line
}
// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

Make an object that represents a dog called myDog which contains the properties "name" (a string),
"legs", "tails" and "friends".
You can set these object properties to whatever values you want, as long "name" is a string, "legs" 
and "tails" are numbers, and "friends" is an array.
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
// Only change code below this line.
var myDog = {
  "name": "Puff",
  "legs": 3,
  "tails": 2,
  "friends": ["Super Dog", "Wonder Dog"]
};

Read in the property values of testObj using dot notation. Set the variable hatValue equal to 
the object property hat and set the variable shirtValue equal to the object property shirt.
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
// Only change code below this line
var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line


