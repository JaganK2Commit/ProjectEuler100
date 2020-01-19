function smallestMult(n) {
  // Good luck!

  // 1. Start from n to 1.
  // 2. decrement n by 1 in each iteration.
  // 3. Get the multiplying factors for every n and divide these from the result.
  // if multiplying factor is divisible then do nothing, otherwise multiply the factor to result.
  var result = 1;
  while (n >= 1) {
    if (result % n !== 0) {
      var factors = GetMultiplyingFactors(n);
      var copyResult = result;
      for (var i = 0; i < factors.length; i++) {
        if (copyResult % factors[i] === 0) {
          copyResult = ~~copyResult / factors[i];
        } else {
          result *= factors[i];
        }
      }
    }
    n--;
  }
  return result;
}

function GetMultiplyingFactors(n) {
  var multiplyingFactors = [];
  if (n === 1) multiplyingFactors[0] = 1;
  var reminderValue = n;
  for (var i = 2; reminderValue !== 1; i++) {
    if (reminderValue % i === 0) {
      multiplyingFactors[multiplyingFactors.length] = i;
      reminderValue = ~~reminderValue / i;
      i = 1;
    }
  }
  return multiplyingFactors;
}

console.log(smallestMult(13));
