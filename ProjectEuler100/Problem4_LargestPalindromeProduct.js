function largestPalindromeProduct(n) {

    // 1. initiallize two variables to max number of n digits.
    var a,b;
    a = b = Math.pow(10,n);
    var maxProductValue = 1;
    // 2. Have two loops starting with max value to 1.
    
    for(var i=a;i>=1;i--){
        for(var j=b;j>=1;j--)
        {
            // 3. For each product verify if the value is palindrome or not.
            if(isPalindrom(i*j))
            maxProductValue = i*j > maxProductValue ? i*j : maxProductValue;
        }
    }
    return maxProductValue;
  }

  function isPalindrom(n)
  {
      var reverseValue = 0;
      var tempValue = n;
      while(tempValue > 0)
      {
        reverseValue = ( (reverseValue * 10 ) + tempValue % 10);
        tempValue = ~~(tempValue/10);
      }
      return reverseValue === n;
  }


  console.log(largestPalindromeProduct(3));
  
