function fahToCel(arr){
  return arr.map(temp => {
    return Math.round((temp - 32) * 5/9)
  })
}

console.log(fahToCel([79, 82, 32, -5]))