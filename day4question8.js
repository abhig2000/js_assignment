// function ask(question, yes,no){
//     if(confirm(question)) yes()
//     else no();
// }

// ask(
//     "do u agree?",
//     function() {console.log(`u agreed`)},
//     function() {console.log(`u camceled`);},
// );

let ask = (question,yes,no)=>{
    if(confirm(question)) yes();
    else no();
}

ask(
    "do u agree?",
    function() {console.log(`You agreed`)},
    function() {console.log(`You canceled the execution`);},
);
