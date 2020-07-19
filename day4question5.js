let sales = prompt("Enter the sales");
let salary = prompt("Enter the employee salary");
let commission;
if(sales>0 && sales<=5000){
    commission=((12*salary)*2)/100;
    console.log(commission);
}
else if(sales>5000 && sales<=10000){
    commission=((12*salary)*5)/100;
    console.log(commission);
}
else if(sales>10000 && sales<=20000){
    commission=((12*salary)*7)/100;
    console.log(commission);
}
else{
    commission=((12*salary)*10)/100;
    console.log(commission);
}