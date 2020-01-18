var primeNumbers = [];

function largestPrimeFactor(number) {
  primeNumbers[0] = 1;
  primeNumbers[1] = 2;
  for (var i = 3; i <= number; i++) {
    var isPrime = true;
    for (var j = 1; j < primeNumbers.length; j++) {
      if (i % primeNumbers[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumbers[primeNumbers.length] = i;
    }
  }

  var result = 1;
  for (var i = 1; i < primeNumbers.length; i++) {
    result = number % primeNumbers[i] === 0 ? primeNumbers[i] : result;
  }
  return result;
}

console.log(largestPrimeFactor(2));
