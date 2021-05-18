function isIsoGrams(str) {
  str = str.toLowerCase()
  for(let i = 0; i < str.length; i++) {
    for(let j = i+1; j < str.length; j++){
      if(str[i] !== str[j]){
        continue
      } else {
        return false
      }
    }
  }
  return true
} 

console.log(isIsoGrams('HellO'))
console.log(isIsoGrams('asdf'))
console.log(isIsoGrams('ElOopt'))