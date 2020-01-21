// Project Euler: Problem 9: Special Pythagorean triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. 
// Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    
    // a2 + b2 = c2
    // a + b + sqrt (b2-a2) = n
    // b2 - a2 = (n - a -b)2
    // b2 - a2 - (n-a-b)2 = 0

    for(var a = 1; a<n ; a++)
    {
        for(var b=1;b<=n;b++)
        {
            if((b*b - a*a - (n-a-b)*(n-a-b)) === 0)
            return (a * b * (n-a-b));
        }
    }
   }
   
   console.log(specialPythagoreanTriplet(24));
   