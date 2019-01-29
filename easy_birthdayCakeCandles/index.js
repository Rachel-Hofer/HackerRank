// Instructions:
// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.
// For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candles are of height  and there are  such candles.

// Function Description
// Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.
// birthdayCakeCandles has the following parameter(s):
// ar: an array of integers representing candle heights

// Input Format
// The first line contains a single integer, , denoting the number of candles on the cake. 
// The second line contains  space-separated integers, where each integer  describes the height of candle .

// My Answer:
function birthdayCakeCandles(ar) {
    let newAr = [];
    let maxNum = Math.max(...ar);

    for (let i = 0; i < ar.length; i++) {
        if (maxNum === ar[i]) {
            newAr.push(ar[i])
        }
        else {
            console.log("keep checking")
        }
    }
    return newAr.length
}

let ar = [4, 5, 5, 3, 5, 1, 0, 5];
birthdayCakeCandles(ar);