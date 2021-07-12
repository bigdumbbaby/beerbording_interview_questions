function zipArray(arr1, arr2){
  let output = []

  for(let i = 0; i<arr1.length; i++){
    output.push(arr1[i], arr2[i])
  }
  return output
}

console.log(zipArray([1,2,3,4], [5,6,7,8]))