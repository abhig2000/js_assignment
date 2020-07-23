
let n = prompt('Enter the no');

const list = document.getElementById('list');

for(let i=1;i<=10;i++){
    const a = n*i;
    list.innerHTML += `<li>${n} x ${i} : ${a}</li>`
}