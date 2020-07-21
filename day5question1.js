let n = prompt(`Enter the no.`)

let arr = [];

for(let i=0;i< +n;i++){
    let a=prompt("enter no in the array")
    arr.push(+a);
}
//console.log(arr);

let odd = arr.filter(val=> val%2!=0);

//console.log(odd);

let cubes = arr.filter(val=> val%2!=0).map(val=>val**3);

console.log(cubes);