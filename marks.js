let marks=prompt("enter number : ");
let grade;
if(marks<=100 && marks>=90){
    grade="A";
}
else if (marks<=89 && marks>=75){
    grade="B";
}
else if (marks<=74 && marks>=60){
    grade="C";
}
else if (marks<=59 && marks>=40){
    grade="D";
}
else{
    grade="F";
}

console.log(grade)