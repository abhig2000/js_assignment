// console.log() mainly used for print the output.
console.log("hello everyone");

var a=({name:"abhishek",age:"22"})
var b=({name:"abhi",age:"22"})
var c=({name:"abhi",age:"22"})

// time() and timeEnd() function used to the amount of time taken by the code.
console.time('time taken');

// console.warn() used to log warning msg to the console.
console.warn("warning")

// console.error used to log error message to the console. It is usefful in testing.
console.error("error occur");

// table() used for generate the table inside the console.
console.table({a,b,c});
console.timeEnd("time taken");

// console.clear() used to clear the console.
console.clear()

// count() method is use for count the Number that the function hit by code. 
console.count();

// group() and groupEnd() methods of the console object allows us to group contents in a separate block.
console.group('simple'); 
  console.warn('warning!'); 
  console.error('error here'); 
  console.log('vivi vini vici'); 
console.groupEnd('simple'); 
console.log('new section');