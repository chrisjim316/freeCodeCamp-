/*
 *Return the factorial of the provided integer.
 *If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 *Factorials are often represented with the shorthand notation n!
 *For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 */

function factorialize(num) {
  if (num <= 0){
    return 1; 
  } else {
    return num * factorialize(num - 1);
  }
}

//test method 
factorialize(5);
