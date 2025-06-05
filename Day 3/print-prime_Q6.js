// 6. Write a program to display prime numbers from 1 to 50
function primeno(){
    for(let i=2;i<=50;i++)
    {
        let isP=true;
        for(let j=2;j<=Math.sqrt(i);j++)
        {
            if(i%j===0)
            {
                isP=false;
            }
        }

        if(isP)
        {
            console.log(i);
        }
    }
}

primeno();