Combine the two if statements into one statement which will return "Yes" if val is less than or 
equal to 50 and greater than or equal to 25. Otherwise, will return "No".
function testLogicalAnd(val) {
  // Only change code below this line
  if (val <= 50 && val >= 25) {
      return "Yes";
  }
  // Only change code above this line
  return "No";
}
// Change this value to test
testLogicalAnd(10);

Combine the two if statements into one statement which returns "Outside"
if val is not between 10 and 20, inclusive. Otherwise, return "Inside".
function testLogicalOr(val) {
  // Only change code below this line
  if (val>20 || val<10) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}
// Change this value to test
testLogicalOr(15);

Combine the if statements into a single if/else statement.
function testElse(val) {
  var result = "";
  // Only change code below this line
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}
// Change this value to test
testElse(4);

Convert the logic to use else if statements.
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
// Change this value to test
testElseIf(7);

Change the order of logic in the function so that it will return the correct statements in all cases.
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
// Change this value to test
orderMyLogic(7);

Write chained if/else if statements to fulfill the following conditions:
function testSize(num) {
  // Only change code below this line
  if( num < 5){
    return "Tiny";
  } else if (num < 10){
    return "Small";
  } else if (num < 15){
    return "Medium";
  } else if (num < 20){
    return "Large";
  } else {
    return "Huge";
  }
  // Only change code above this line
}
// Change this value to test
testSize(0);

Your function will be passed par and strokes arguments. Return the correct string according to this
table which lists the strokes in order of priority; top (highest) to bottom (lowest):
function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1){
    return "Hole-in-one!";
  } else if(strokes <= par-2){
    return "Eagle";
  } else if(strokes == par-1){
    return "Birdie";
  } else if(strokes == par){
    return "Par";
  } else if(strokes == par+1){
    return "Bogey";
  } else if(strokes == par+2){
    return "Double Bogey";
  } else {
    return "Go Home!"
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);

Write a switch statement which tests val and sets answer for the following conditions:
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3: 
      answer = "gamma";
      break;   
    case 4:
      answer = "delta";
      break; 
  }
  // Only change code above this line  
  return answer;  
}
// Change this value to test
caseInSwitch(1);




