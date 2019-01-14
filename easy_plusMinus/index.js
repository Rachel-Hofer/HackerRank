// Instructions:
// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

// My Answer:

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  let finalArr = [];

for(let i = 0; i <= arr.length; i++){
  if(arr[i] === 0){
    zero++
  }
  else if(arr[i] > 0){
    pos++
  }
  else if(arr[i] < 0){
    neg++
  }
    
}

let posDecimal = pos / arr.length;
let negDecimal = neg / arr.length;
let zeroDecimal = zero / arr.length;

console.log(posDecimal.toFixed(6)); 
console.log(negDecimal.toFixed(6));
console.log(zeroDecimal.toFixed(6));

}


let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr)