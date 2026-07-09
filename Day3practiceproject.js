//print all even number 0 to 100
// for(let n=0; n<=100;n++){
//     if (n%2===0){
//             console.log("Even numbers:",n);
//     }
// }

//user guse number 
let i=1;
let gusseNum=28;
let usernum =Number(prompt("Gusse number of computer:"));
while(usernum != gusseNum){
    usernum=Number(prompt("wrong! guess again:"));

}
    console.log("congratulation! you win:",gusseNum,"=",usernum);


