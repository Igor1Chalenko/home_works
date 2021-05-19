function arrGenerator(num){
    let arr = [];
    let element;
    for (let i = 0; i < num; i++) {
        while(isNaN(element)){
            element = +prompt("enter element");
        }
        arr.push(element);
        element = NaN;
    }
    return arr;
}

function myConsoleLog(arr){
    let string = "";
    for (const iterator of arr) {
        string += iterator;
        string += ", ";
    }
    console.log(string);
}

function arrSortBuble(arr){
    if(!Array.isArray(arr)){
        console.log("it is not an array");
        return;
    }

    let buffer;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] < arr[i]){
                buffer = arr[j];
                arr[j] = arr[i];
                arr[i] = buffer;
            }
        }
    }
}

function selectionSort(arr){
    if(!Array.isArray(arr)){
        console.log("it is not an array");
        return;
    }

    let step = arr.length - 1;
    let max = arr[0];
    let index = 0;
    let i = 1;
    let buffer;

    while(step > 0){
        if(i > step)
            i=0;
        
        if(max < arr[i]){
            max = arr[i];
            index = i;
        }

        if(i === 0){
            buffer = arr[step];
            arr[step] = max;
            arr[index] = buffer;
            max = arr[0];
            index = 0;
            step--;
        }
        i++;
    }
}

let size;
while(isNaN(size)){
    size = prompt("enter the size of the array 5-20");
    if(size < 5 || size > 20)
        size = NaN;
}

let mas = arrGenerator(size);
myConsoleLog(mas);
arrSortBuble(mas);
myConsoleLog(mas);

let arr = arrGenerator(size);
myConsoleLog(arr);
selectionSort(arr);
myConsoleLog(arr);
