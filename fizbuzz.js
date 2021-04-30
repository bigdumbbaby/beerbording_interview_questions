// Create a for loop that iterates up to 100 while outputting 
// "fizz" at multiples of 3, "buzz" at multiples of 5 
// and "fizzbuzz" at multiples of 3 and 5.

function fizzbuzz(){
  for(let i = 0; i < 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz', i)
    } else if(i % 3 === 0){
      console.log('fizz', i)
    } else if(i % 5 === 0){
      console.log('buzz', i)
    }
  }
}

fizzbuzz()