// Condtional statements
// let color = "white";
let mood="light-mood";

if(mood==="Dark-Mood") //agar mood dark color ma ha to
{
    color = "black";//black color print karo
}else{
    color = "white";
}
console.log(color); // color
// conditional statements
//relational operators
let a=2;
let b=3;
if (a<b){
    console.log("a is less then b","a=",a,"b=",b);
}
else if(a>b){
    console.log("a is graterthen b:",a,b);
}
else{
    console.log("a is equal to b");
}

// aeithmtic operators
let x=6,y=88;
console.log(x+y);
console.log(x-y);
console.log(x/y);


//ternary operators
let z=23;
g= z >= 23?"true":"fale";
console.log(g);

let num=prompt("Enter a number"); // it cannott run becuse "prompt is brawser function" use to grt input from user
if (num%5===0){
    console.log("num=",num);
}  these lins run in browsers


// practics question
num= 34;
// Grade=;
if (num>90){
    Grade="A+";
}
else if(num>80){
    Grade="A";
}
else if (num>70){
    Grade="B";
}
else if(num>50){
    Grade="C";
}
else{
    Grade="F";}
console.log("Grade=",Grade);
