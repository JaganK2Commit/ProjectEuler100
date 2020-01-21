// Project Euler: Problem 10: Summation of primes
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below n.

function primeSummation(n) {
    var primes = [2];
    var sumOfPrimes = 0;
    var composites = [];
    
    if( n===1 ) return primes[0];

    for(var a=2;a<n;a++)
    {
        if(composites[a] === undefined){
            for(var j=0; (j*a)<=n;j++)
            {
            if(composites[j*a] === undefined)
               composites[j*a] = 1;
            }
            sumOfPrimes += a;
            primes[primes.length] = a;
        }
    }
    return sumOfPrimes;
  }
  
  console.log(primeSummation(2000000));
  