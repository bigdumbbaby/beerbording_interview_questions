function getAges(arr) {
  let output = []
  for(let i = 0; i<arr.length; i++){
    if( 2021 - arr[i] > 18){
      output.push(true)
    } else {
      output.push(false)
    }
  }
  return output
}

console.log(getAges([1994, 2002, 2010, 1982]))