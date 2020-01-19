// Project Euler: Problem 7: 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

function nthPrime(n) {
  // 1. Initialize a number from 2 and increase the number on every iteration.
  // 2. Iteration ends when collected prime numbers meet value n.
  if (n < 1) return [];
  var primeNumbers = [];
  primeNumbers[0] = 2;
  var number = 3;
  while (primeNumbers.length !== n) {
    var isPrime = true;
    for (var i = 0; i < primeNumbers.length; i++) {
      if (number % primeNumbers[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumbers[primeNumbers.length] = number;
    }
    number++;
  }
  return primeNumbers[primeNumbers.length - 1];
}

console.log(nthPrime(10001));
