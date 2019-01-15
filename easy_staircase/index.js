// Instructions:

// Consider a staircase of size n = 4;
// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n.


// My Answer:

function staircase(n) {
    var numSymbol = '#';

  for(let i = 1; i <= n; i++){
    if(i <= n){
      console.log(numSymbol)
      numSymbol+= '#'
    }
    else if(i > n){
      return
    }
  }
}
staircase(6)