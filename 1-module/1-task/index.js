/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

  function factorial(n) {
    let x = 1;
    for (let i = 1; i <= n; i++) {
      x *= i;
    }
    return x;
  }
  
 // factorial(0); // 1
 // factorial(1); // 1
 // factorial(3); // 6
 // factorial(5); // 120
