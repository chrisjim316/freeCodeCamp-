Select all the occurrences of the word and in testString.
You can do this by replacing the . part of the regular expression with the word and.
// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;
// Only change code below this line.
var expression = /and/gi;  // Change this Line
// Only change code above this line
// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;

Use the \d selector to select the number of numbers in the string, allowing for the possibility of one or more digit.
// Setup
var testString = "There are 3 cats but 4 dogs.";
// Only change code below this line.
var expression = /\d+/g;  // Change this line
// Only change code above this line
// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;

Use \s to select all the whitespace characters in the sentence string.
// Setup
var testString = "How many spaces are there in this sentence?";
// Only change code below this line.
var expression = /\s+/g;  // Change this line
// Only change code above this line
// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;

Use /\S/g to count the number of non-whitespace characters in testString.
// Setup
var testString = "How many non-space characters are there in this sentence?";
// Only change code below this line.
var expression = /\S/g;  // Change this line
// Only change code above this line
// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;






