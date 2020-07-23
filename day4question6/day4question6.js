function ask(){
    let n= prompt(`Enter no greater than 100`)
        if(n==null){
            return
        }
        else if(+n<100){
            ask();
        }
        
}

ask();