console.log(`1. Addition`)
console.log(`2. Substraction`)
console.log(`3. Multiplication`)
console.log(`4. Division`)
console.log('5. Square root')
console.log(`6. Percentage`)

let n =prompt("Enter the no");
let result;
if(n==1){
        let num1=prompt("enter the no1"); 
        let num2=prompt("enter the no2");
        result = +num1+ +num2;
        console.log(result);
}
else if(n==2){
        let num1=prompt("enter the no1"); 
        let num2=prompt("enter the no2");
        result = +num1- +num2;
        console.log(result);
}
else if(n==3){
        let num1=prompt("enter the no1"); 
        let num2=prompt("enter the no2");
        result = +num1 * +num2;
        console.log(result);
}
else if(n==4){
    let num1=prompt("enter the no1"); 
    let num2=prompt("enter the no2");
    result = +num1 / +num2;
    console.log(result);
}
else if(n==5){
    let num1=prompt("enter the no1"); 
        //let num2=prompt("enter the no2");
        result = Math.sqrt(num1);
        console.log(result);
}
else{
    let num1=prompt("enter the no1"); 
        let num2=prompt("enter the no2");
        result = +num1 *(+num2/100);
        console.log(result);
}