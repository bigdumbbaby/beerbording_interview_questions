// Write a function that takes a string and returns the uppercase 
// version of that string with an ! at the end.

const uppercase = (string) => {
  return string.toUpperCase() + '!'
}

console.log(uppercase('hello'))