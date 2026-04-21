let operation=prompt("enter your opeartion :");
let num1=Number(prompt("enter your first number : "));
let num2=Number(prompt("enter your second number : "));
switch(operation){
    case "addition":
      console.log("your sum is ",num1+num2);
      break;
    case "substraction":
       console.log("Difference between numbers is ",num1-num2);
       break;
    case "multiplication":
        console.log("product of number is ",num1*num2);
        break;
    case "divide":
        console.log("the remaining no is ",num1/num2);
        break;
    case "modulo":
        console.log("the remainder of division is ",num1%num2);
        break;
}