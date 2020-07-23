
var i=0;
function change(){
    const arr = ['orange','blue','black','yellow','yellowgreen','green'];
    //const a1 = document.getElementById('document')
    document.body.style.backgroundColor = arr[i];
     i =(i+1)%arr.length;   
    }

    setInterval(change,5000);