// 3. Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *


const upper = (n)=>{
    for(let i =0; i<n; i++){
        let pattern = "" ;
    //space
    for(let j = 0; j<n-i+1; j++ ){
     pattern+=" "
    }

        // star
        for(let j = 0; j<i; j++ ){
        pattern+=" *"
    }


    console.log(pattern)
}
}
const lower = (n)=>{
    for(let i =0; i<n; i++){
        let pattern = " " ;
    //space
    for(let j = 0; j<i; j++ ){
     pattern+=" "
    }

        // star
        for(let j = n; j>i; j-- ){
        pattern+=" *"
    }


    console.log(pattern)
}
}

let n = 5;
upper(n);
lower(n);
// // output
//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *
