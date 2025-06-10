// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")>

let str = "abcabcdabbcc"
let res = ""
 let mp = new Map()

 for (let i = 0; i< str.length; i++){
    if(mp.has(str[i])){
        mp.set(str[i],mp.get(str[i])+1);

    }
    else{
        mp.set(str[i], 1)
    }
    
 }

 for(let[key , val] of mp)
        {
            res+= key + val;
        }
 console.log(res)