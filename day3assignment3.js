let marks = prompt("Enter Your marks");

if(marks>=60){
    console.log(`Marks are ${marks} and grade is A`);
}
else if(marks<60 && marks>=50){
    console.log(`Marks are ${marks} and grade is B`);
}
else if(marks<50 && marks>=40){
    console.log(`Marks are ${marks} and grade is C`);
}
else{
    console.log(`Marks are ${marks} and grade is D`);
}

// Ternary Operator
let result = (marks>=60) ? 'A': (marks<60 && marks>=50) ? 'B': (marks<50 && marks>=40) ? 'C':'D';

console.log(`Marks are ${marks} and grade is ${result}`)
