function swap(x, y){
  y = String(x) + String(y)
  x = parseInt(y[1])
  y = parseInt(y[0])
  return [x, y]
}

console.log(swap(4,6))