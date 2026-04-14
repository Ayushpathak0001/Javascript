let marks=prompt("enter your marks");
if (marks<=100&& marks>=90){
   marks=("A")

}
else if(marks<=89 && marks>=70){
    marks=("B")

}
else if(marks<=69 && marks>=60){
    marks=("C")
}
else if(marks<=59 && marks>=50){
   marks=("D")
}
else{
    marks=("F")
}
console.log("According to your marks your Grades are",marks);