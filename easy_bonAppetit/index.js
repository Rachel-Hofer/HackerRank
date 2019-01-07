// Instructions:

// Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

// For example, assume the bill has the following prices: bill = [2, 4, 6] . Anna declines to eat item  which costs k = bill[2]. If Brian calculates the bill correctly, Anna will pay (2 +4) / 2 = 3. 

// Function Description

// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill
// Input Format

// The first line contains two space-separated integers  and , the number of items ordered and the -based index of the item that Anna did not eat. 
// The second line contains  space-separated integers  where . 
// The third line contains an integer, , the amount of money that Brian charged Anna for her share of the bill.


// My Answer: (in progress)
function bonAppetit(bill, k, b) {
    let newBill = bill.splice(k, 1)
    let amountCharged = bill.reduce((total, amount) => total + amount)
    let half = amountCharged/2
    let difference = b - half
  
      if(difference !== 0){
        return difference
      }
      else {
        return 'Bon Appetit'
      }
  }
  
  let bill = [3, 10, 2, 9]
  let k = 1
  let b = 7
  bonAppetit(bill, k, b)