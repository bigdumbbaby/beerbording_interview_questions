String.prototype.removeVowels = String.prototype.removeVowels || function(){
  return this.split('').filter((letter) => {
    if(letter.toLowerCase() != 'a' &&
      letter.toLowerCase() != 'e' &&
      letter.toLowerCase() != 'i' &&  
      letter.toLowerCase() != 'o' &&  
      letter.toLowerCase() != 'u'
    ){
      return letter
    }
  }).join('')
}

console.log('hello'.removeVowels())