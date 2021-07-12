function doorGuy(arr){
  for(let i=0; i<arr.length; i++){
    if(2021 - arr[i] >= 21){
      arr[i] = true
    } else {
      arr[i] = false
    }
  }
}

let arr = [1994, 2008, 2020, 1984, 1999]
doorGuy(arr)
console.log(arr)