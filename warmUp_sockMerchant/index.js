// Instructions:

// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description
// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):
// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format

// The first line contains an integer , the number of socks represented in . 
// The second line contains  space-separated integers describing the colors  of the socks in the pile.


// My Answer: // passes 1 of 2 tests, in progress

function sockMerchant(n, ar) {
    var tracker = 0;
    
    for(let i = 0; i < ar.length-1; i++){
      for(let j = 1; j < ar.length; j++){
          console.log('i', ar[i])
          console.log('j', ar[j])
    
        if(i === j){
          ar[j+1]
          console.log('is this working', ar[j+1])
        }
        if(ar[i] === ar[j]){
          ar.splice(i, 1)
          ar.splice(j, 1)
          tracker++
          console.log("ar in the if", ar)
          console.log("the tracker",tracker)
        }
        else {
          console.log("ar in the else", ar)
        }
      }
    }
    return tracker
    }
    
    let n = 9
    let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    sockMerchant(n, ar)