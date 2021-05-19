///////////////////////______1______///////////////////////

function loopFactorial(num){
    if(num === 0)
        return 0;

    let fact = 1;
    for (let i = 1; i <= num; i++){
        fact *= i;
    }
    return fact;
}



function recursionFactorial(num){
    
    if(num < 1)
        return 1;

    return num *=recursionFactorial(num - 1); 
}

console.time("loop");
console.log(loopFactorial(15));
console.timeEnd("loop");

console.time("rec");
console.log(recursionFactorial(15));
console.timeEnd("rec");

///////////////////////______2______///////////////////////

function arrNumXz(arr, num){
    let maxI= arr[0];
    for (const iterator of arr) {
        if(maxI < iterator)
            maxI = iterator;
    }
    
    if(num > maxI){
        arr.shift();
        arr.push(num);
    }
    else{
        arr.unshift(num);
        arr.pop();
    }
}

let mas = [1, 8, 66, 34, 99, 0, 12];

console.log(mas);
arrNumXz(mas, 125);
console.log(mas);

arrNumXz(mas, 85);
console.log(mas);