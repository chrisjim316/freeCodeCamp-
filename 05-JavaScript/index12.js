Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var r = 0; r < arr.length; r++){
    for(var c = 0; c < arr[r].length; c++){
      product = product * arr[r][c];
    }
  }
  // Only change code above this line
  return product;
}
// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

Push the numbers 0 through 4 to myArray using a while loop.
// Setup
var myArray = [];
// Only change code below this line.
var i = 0;
while( i < 5) {
  myArray.push(i);
  i++;
}

Change randomFraction to return a random number instead of returning 0.
function randomFraction() {
  // Only change code below this line.
  return Math.random();
  // Only change code above this line.
}

Use this technique to generate and return a random whole number between 0 and 9.
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
  // Only change code below this line.
  return Math.floor(Math.random() * 10);
}

Create a function called randomRange that takes a range myMin and myMax and returns a random number 
that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);
// Only change code below this line.
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax-myMin + 1) + myMin); // Change this line
}
// Change these values to test your function
var myRandom = randomRange(5, 15);


