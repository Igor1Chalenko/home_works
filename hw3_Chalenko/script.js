let action = prompt("enter action: +, -, /, *, cos, sin, pow");

if(action == "sin" || action == "cos"){
    let number = +prompt("enter the number");
    
    switch(action){
        case "sin":
            console.log(`sin ${number} = ${Math.sin(number)}`);
            break;
        case "cos":
            console.log(`cos ${number} = ${Math.cos(number)}`);
            break;
    }
}
else if(action == "+" || action == "-" || action == "/" || action == "*" || action == "pow"){
    let numberOne = +prompt("enter number one");
    let numberTwo = +prompt("enter number two");

    switch(action){
        case "+":
            console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
            break;
        case "-":
            console.log(`${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`);
            break;
        case "*":
            console.log(`${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`);
            break;
        case "/":
            if(numberTwo != 0){
                console.log(`${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`);
                break;
            }
            else{
                console.log("cannot be divided by zero");
                break;
            }
        case "pow":
            console.log(`${numberOne} pow ${numberTwo} = ${Math.pow(numberOne, numberTwo)}`);
            break;  
    }
}
else
    alert("you entered something wrong");
