// ===PSUEDO CODE===
/** 
-create a function that takes in a list and a number
-Initialize an empty object to store the count of each integer
-loop through each element in the list
-Initialize variables to keep track of the current nth rarest integer and count
-Loop through each key in countMap and for each one, increment the currentN

    
*/

function nthMostRarestSignature(list, n) {
  // Count occurrences of each integer
  const countMap = {};
  for (let i = 0; i < list.length; i++) {
    const num = list[i];
    countMap[num] = (countMap[num] || 0) + 1;
  }

  // Find the nth rarest integer without sorting
  let nthRarest = null;
  let currentN = 0;
  for (const num in countMap) {
    if (countMap.hasOwnProperty(num)) {
      currentN += 1;
      if (currentN === n) {
        nthRarest = parseInt(num);
        break;
      }
    }
  }

  return nthRarest;
}

// Example usage
const list = [5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5];
const n = 2;
const result = nthMostRarestSignature(list, n);
console.log(result);
