// 6. Write a program to display prime numbers from 1 to 50
for(let i = 2; i<=50; i++){
    let isP = true;
    for(let j = 2; j<i; j++){
        if(i%j==0){
            isp= false;
            break
        }
    }

    if(isP){
        console.log(i);
        
    }
}
