// Project Euler: Problem 6: Sum square difference
// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
    
    //1. Sum of Squares of first n numbers.
    var sumOfSquares = 0;
    for(var i=1;i<=n;i++){
        sumOfSquares += Math.pow(i,2);
    }
    var squareOfsumOfNumbers = Math.pow((n * (n+1) / 2),2);
    return Math.abs(sumOfSquares - squareOfsumOfNumbers);
  }
  
  console.log(sumSquareDifference(100));
  