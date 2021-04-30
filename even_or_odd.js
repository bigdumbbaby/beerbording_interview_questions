
// Create a function that takes an integer as an argument and returns "Even"
// for even numbers or "Odd" for odd numbers.

function evenOrOdd(n){
  if(n % 2) {
    return 'odd'
  } else {
    return 'even'
  }
}

console.log(evenOrOdd(8))
console.log(evenOrOdd(11))
console.log(evenOrOdd(2))
console.log(evenOrOdd(1))
console.log(evenOrOdd(20))
console.log(evenOrOdd(25))