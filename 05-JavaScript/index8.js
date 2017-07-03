Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
// Change this value to test
testEqual(10);

Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
// Change this value to test
testStrict(10);

Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
// Change this value to test
testNotEqual(10);

Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  if (val !== 17) {
  // Only Change Code Above this Line
    return "Not Equal";
  }
  return "Equal";
}
// Change this value to test
testStrictNotEqual(10);

Add the greater than operator to the indicated lines so that the return statements make sense.
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
// Change this value to test
testGreaterThan(10);

Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }
  return "9 or Under";
}
// Change this value to test
testGreaterOrEqual(10);

Add the less than operator to the indicated lines so that the return statements make sense.
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  if (val < 55) {  // Change this line
    return "Under 55";
  }
  return "55 or Over";
}
// Change this value to test
testLessThan(10);

Add the less than or equal to operator to the indicated lines so that the return statements make sense.
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }
  return "25 or More";
}
// Change this value to test
testLessOrEqual(10);


