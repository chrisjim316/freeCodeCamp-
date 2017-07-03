Read the values of the properties "an entree" and "the drink" of testObj 
using bracket notation and assign them to entreeValue and drinkValue respectively.
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
// Only change code below this line
var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

Use the playerNumber variable to lookup player 16 in testObj using bracket notation.
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
// Only change code below this line;
var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder".
You can use either dot or bracket notation.
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.name = "Happy Camper";
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};
// Only change code below this line.
myDog.name = "Happy Coder";

Add a "bark" property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.bark = "bow-wow";
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};
// Only change code below this line.
myDog.bark = "woof";

Delete the "tails" property from myDog. You may use either dot or bracket notation.
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
delete ourDog.bark;
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};
// Only change code below this line.
delete myDog.tails;

Convert the switch statement into a lookup table called lookup.
Use it to lookup val and assign the associated string to the result variable.
// Setup
function phoneticLookup(val) {
  var result = "";
  // Only change code below this line
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}
// Change this value to test
phoneticLookup("charlie");

Modify the function checkObj to test myObj for checkProp. 
If the property is found, return that property's value. If not, return "Not Found".
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp))
    return myObj[checkProp];
  else
    return "Not Found";
}
// Test your code by modifying these values
checkObj("pet");

Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CS", 
      "8T", 
      "LP" ],
    "gold": true
  },
  {
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
  }
  // Add record here
];

Access the myStorage object and assign the contents of the glove box property to the 
gloveBoxContents variable. Use bracket notation for properties with a space in their name.
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
// Only change code below this line
var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

Retrieve the second tree from the variable myPlants using object dot and array bracket notation.
// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];
// Only change code below this line
var secondTree = myPlants[1].list[1]; // Change this line

Use a for loop to work to push the values 1 through 5 onto myArray.
// Example
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
// Setup
var myArray = [];
// Only change code below this line.
for(var i = 1; i <= 5; i++) {
  myArray.push(i);
}

Push the odd numbers from 1 through 9 to myArray using a for loop.
// Example
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
// Setup
var myArray = [];
// Only change code below this line.
for (var i = 1; i <= 9; i += 2) {
  myArray.push(i);
}

Push the odd numbers from 9 through 1 to myArray using a for loop.
// Example
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
// Setup
var myArray = [];
// Only change code below this line.
for (var i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}

/* alternative solution ;) 
for (var i = 1; i <= 9; i+= 2) {
  myArray.unshift(i);
}
*/

Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
// Setup
var myArr = [ 2, 3, 4, 5, 6];
// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}








