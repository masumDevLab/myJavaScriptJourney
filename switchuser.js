var num1=parseFloat(prompt("Enter your first number:"));
var num2=parseFloat(prompt("Enter your second number:"));

switch(true){
    case num1>num2:
        console.log(`${num1} is greater than ${num2}`);
        break;
    case num2>num1:
        console.log(`${num2} is greater than ${num1}`);
        break;
    case num1==num2:
        console.log("Numbers are equal.");
        break;
    default:
       console.log("NaN! Please Enter a valid Number.");
       break;
}