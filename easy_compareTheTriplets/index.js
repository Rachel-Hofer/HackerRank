// Instructions:

// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.
// We define the rating for Alice's challenge to be the triplet , a = (a[0], a[1], a[2]) and the rating for Bob's challenge to be the triplet b = (b[0], b[1], b[2]).
// Your task is to find their comparison points by comparing a[0] with b[0], etc.
// If a > b, then Alice is awarded  point.
// If b > a, then Bob is awarded  point.
// If a === b, then neither person receives a point.
// Comparison points is the total points a person earned.


// My Answer:

function compareTriplets(a, b) {
    let annesScore = 0;
    let bobsScore = 0;
    let finalScore = [];
    let index = 0;
  
      for(let i = 0; i < a.length; i++){
        if(a[index] === b[index]){
          index++
        }
        else if(a[index] > b[index]){
          annesScore++
          index++
        }
        else {
          bobsScore++
          index++
        }
      }
    finalScore.push(annesScore)
    finalScore.push(bobsScore)
    return finalScore
  }
  
  let a = [3, 6, 7];
  let b = [3, 6, 10];
  compareTriplets(a, b)