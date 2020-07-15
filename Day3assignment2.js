// variables(var):
//   In javascript code, for declaring variables we use var.
//   var declerations are globally scoped.
//   var variables can be redeclared and updated.
//   var can be declared without being initialized.

  var a="hello";
  a="world";

  console.log(a);

  var b={
        name:"Abhishek",
        age:"24",
  }
  var c={
    name:"Abhi",
    age:"22",
}
var d={
    name:"Abhimanyu",
    age:"30",
}

console.log({b,c,d});


// let:
//  It used to declare variables in javascript.
//  let variables are block scope.
//  let can be  updated but nor redeclared.
//  let can be declared without being intialized.

 let greeting = "say Hi";
 let times = 4;

 if (times > 3) {
      let hello = "say Hello instead";
      console.log(hello);// "say Hello instead"
  }
 console.log(hello) //it show error because hello is not defined outide the block


// constant(const):
//   Every const declaration, therefore, must be initialized at the time of declaration.
//   Variables are declared with the const maintain constant value.
//   let declarations, const declarations can only be accessed within the block they were declared.
//   const cannot be updated or redeclared.

  const f = "say Hi";
  //f = "say Hello instead";// error: Assignment to constant variable. 
  console.log(f);
  


  