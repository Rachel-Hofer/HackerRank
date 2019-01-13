// Instructions:

//Given a square matrix, calculate the absolute difference between the sums of its diagonals.


// My Answer:

function diagonalDifference(arr) {

    let leftDiagonal = [arr[2], arr[4], arr[6]];
    let rightDiagonal = [arr[0], arr[4], arr[8]];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    let left = leftDiagonal.reduce(reducer, 0);
    let right = rightDiagonal.reduce(reducer, 0);
    
    let answer = left - right;
    console.log(typeof answer)
    return Math.abs(answer)
    
    }
    
    
    let arr = 
    [
    11, 2, 4,
    4, 5, 6,
    10, 8, -12
    ];
    
    diagonalDifference(arr)