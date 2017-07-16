/*
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */
 
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean); 
}

bouncer([7, "ate", "", false, 9]);
