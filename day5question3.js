const result = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response=>response.json()).then(data=>console.log(data));

console.log(result);


fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify({
        userID:254,
        title:"some title",
        body:"loren ipsum",
    })
}).then(response=>response.json()).then(data=>console.log(data));



async function fetch1(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
}

fetch1();