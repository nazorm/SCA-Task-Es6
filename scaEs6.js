const integer = (a, b) =>{
    if( a > b){
        console.log(a);
    }else{
        console.log(b);
    }
}
integer(2 , 5);

const checkValue = (num) =>{
    for (let i = 0; i<= num; i++){
       if (i %2 === 0){
           console.log(`${i} is even`);
          }
        else{
           console.log(`${i} is odd`);
       }
    }
}
checkValue(20);

const multiple = (num) =>{

    for (i = 0; i <= num; i++){
        if (i % 3 && i % 5){
            console.log(`${i} FizzBuzz`);
            continue;
        }
       if (i % 3){
           console.log(`${i} Fizz`);
           continue;

       }
       if (i % 5){
           console.log(`${i} Buzz`);
           continue;
           
       }
       
    }   

}
multiple(100);