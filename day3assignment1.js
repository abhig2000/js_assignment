
function EvenOdd(num){
    if(num%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}

let var1= prompt("Enter the number");
let result= EvenOdd(var1);
console.log(`The number entered is ${var1} and Number is ${result}`);
