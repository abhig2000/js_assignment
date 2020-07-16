// String Method

let a="Congratulations to all 12th student";

//search() method searches a string for a specified value and returns the position of the match.
console.log(a.search("to"));

//slice() extracts a part of a string and returns the extracted part in a new string.
console.log(a.slice(0,15))
console.log(a.slice(9))
console.log(a.slice(-9))

//Substring is similar to slice but not accepting negetive index.

console.log(a.substring(18,22));
console.log(a.substring(18))
console.log(a.substring(-2))

// replace() method replaces a specified value with another value in a string.
//It does not change the string. It return new String
let b=a.replace("Congratulations","congrats")
console.log(b)
console.log(a)

// to replace case insensitive, use a regular expression with an /i flag.
console.log(a.replace(/conGratulations/i,"congrats"))

// string can be converted to an array with the split() method
console.log(a.split("|"))

// Array Method

let arr = ["one", "two", "three", "four", "five"]
// length method
console.log(arr.length)

//splice() method
console.log(arr.splice(1,1))
arr.splice(0,1,"zero")
console.log(arr)

//slice() method
console.log(arr.slice(2,4))

console.log(arr.slice(1))

//indexOf() method

console.log(arr.indexOf("one"))


