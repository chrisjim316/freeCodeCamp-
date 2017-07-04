Give your motorBike object a wheels, engines and seats attribute and set them to numbers.
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};
var motorBike = {
  // Only change code below this line.
  "wheels":2,
  "engines":1,
  "seats":2
};


Have your MotorBike constructor describe an object with wheels, engines and seats properties and set them to numbers.
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};
// Only change code below this line.
var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 2;
};


In the editor, use the Car constructor to create a new instance and assign it to myCar.
Then give myCar a nickname property with a string value.
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
  this.turboType = "twin";
};
// Only change code below this line.
var myCar = new Car();
myCar.nickname = "turbo";


Alter the Car constructor to use parameters to assign values to the wheels, seats, and engines properties.
Then call your new constructor with three number arguments and assign it to myCar to see it in action.
var Car = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};
//Try it out here
var myCar = new Car(3,2,1);
var Car = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};
//Try it out here
var myCar = new Car(3,2,1);


Modify the Bike constructor to have a private property called gear and two public methods
called getGear and setGear to get and set that value.
var Car = function() {
  // this is a private variable
  var speed = 10;
  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };
  this.decelerate = function() {
    speed -= 5;
  };
  this.getSpeed = function() {
    return speed;
  };
};
var Bike = function() {
  // Only change code below this line.
  var gear;
  this.getGear = function() {
    return gear;
  }
  this.setGear = function(newGear){
    gear = newGear; 
  }
};
var myCar = new Car();
var myBike = new Bike();


Use the map function to add 3 to every value in the variable oldArray, and save the results into
variable newArray. oldArray should not change.
var oldArray = [1,2,3,4,5];
// Only change code below this line.
var newArray = oldArray.map(function(val){
  return val + 3;
});

