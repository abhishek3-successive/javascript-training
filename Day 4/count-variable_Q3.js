// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")>
let str = "abcabcdabbcc"
const mp = new map();
for(let i = 0; i<str.length; i++){
    mp.set(str[i])
    console.log(mp)
}

