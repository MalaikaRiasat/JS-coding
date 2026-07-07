function result(numbers){
    let Grade;
    if (numbers>90){
        Grade="A";
    }
    else if(numbers>80){
        Grade="B+";
    }
    else if(numbers>70){
        Grade="B";
    }
    else if(numbers>60){
        Grade="B-";
    }
    else if(numbers>50){
        Grade="C+";
    }
    else{
        Grade="F";
    }
    return Grade;
}
console.log(result(56));
