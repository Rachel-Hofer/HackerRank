// Instructions:

// Given an array of integers, find the sum of its elements.
// Function Description
// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
// simpleArraySum has the following parameter(s):
// ar: an array of integers
// Input Format
// The first line contains an integer, n, denoting the size of the array. 
// The second line contains n space-separated integers representing the array's elements.


// My Answer:

function simpleArraySum(ar){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
      return ar.reduce(reducer, 0)
  }
  
  let ar = [1, 2, 3, 4, 10, 11] //31
  simpleArraySum(ar)