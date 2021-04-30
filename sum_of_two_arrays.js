//Get the sum of two arrays...actually the sum of all their elements. 
//Each array includes only integer numbers. Output is a number too.

const arraySum = (array1, array2) => {
  let combinedArray = array1.concat(array2)
  let sum = 0

  for(let i = 0; i < combinedArray.length; i++)
    sum += combinedArray[i]


    return sum
}

console.log(arraySum([1,2,4] , [1,3,3]))