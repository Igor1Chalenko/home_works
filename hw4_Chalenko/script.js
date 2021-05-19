do {
    let action = prompt("enter action: +, -, /, *, cos, sin, pow");
    let sign1operand = ["cos", "sin"];
    let sign2operand = ["+", "-", "/", "*", "pow"];
    let numberOne;
    let numberTwo;
    let next = false;

    for (let i = 0; i < sign1operand.length; i++) {
        if(action === sign1operand[i]){
            while(isNaN(numberOne)){
                numberOne = +prompt("enter the number");
            }
            switch(action){
                case "sin":
                    console.log(`sin ${numberOne} = ${Math.sin(numberOne)}`);
                    next = true;
                    break;
                case "cos":
                    console.log(`cos ${numberOne} = ${Math.cos(numberOne)}`);
                    next = true;
                    break;
            }
        }
    }

    if(next)
        continue;
   
    let flag = true;
    for (let i = 0; i < sign2operand.length; i++) {
        if(action === sign2operand[i])
            flag = false;
    }

    if(flag){
        alert("you chose the wrong action");
        continue;
    }
        
    while(isNaN(numberOne)){
        numberOne = +prompt("enter number one");
    }

    while(isNaN(numberTwo)){
        numberTwo = +prompt("enter number two");
    }

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
        // default:
        //     console.log("you chose the wrong action");
    }
} while (confirm("want to repeat ?"));