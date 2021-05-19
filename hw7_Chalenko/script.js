function arrGenerator(){ // генератор числовых массивов
    let text;
    let arrString;
    let arrNum;
    
    do{
        text = prompt("enter numbers separated by \"space\", at least \"3\" (введите массив через пробел)."); // строка символов через пробел
        arrString = text.split(" "); // преобразуем строку в массив строковых символов, по разделителю "пробел"
        arrNum = arrString.map(Number); // преобразуем массив строковых символов в числовой
    }while(arrNum.length < 3 || arrNum.includes(NaN)); // пока длинна массива < 3 или в массиве есть NaN, цикл повторяется.
    //(includes правильно обрабатывает NaN) те NaN === NaN
    return arrNum;
}

// function sortLeft(arr){ // сортировка по возрастанию
//     arr.sort((a, b) => a - b);
// }

// function sortRight(arr){ // сортировка по убыванию
//     arr.sort((a, b) => b - a);
// }

function arrSort(arr, descending = false){ // сортировка по возрастанию/убыванию, второй параметр для сортировки по убыванию
    arr.sort(descending ? (a, b)=> b - a : (a, b) => a - b);
}

// function even(arr){ // четные числа
//    return arr.filter((a) => a % 2 === 0 ); // если элемент массива делится на 2 без остатка
// } 

// function notEven(arr){ // нечетные числа
//     return arr.filter((a) => a % 2 !== 0 ); // если элемент массива делится на 2 с остатком
// }

function evenOdd(arr, odd = false){ // четное/нечетное, второй параметр для нечетных
    return arr.filter(odd ? (a) => a % 2 !== 0 : (a) => a % 2 == 0);
} 

function sum(arr){ // сумма всех чисел массива
    return arr.reduce((sum, current) => sum + current, 0); //  sum - аккумулирующий аргумент, current – элемент массива
}   // 0 - начальное значение, (Если массив пуст, то вызов reduce без начального значения выдаст ошибку)

function average(arr){ // среднее арифметическое
    return arr.reduce((sum, current) => sum + current, 0) / arr.length; // сумма всех элементов / на длинну массива
} 

function maxNum(arr){ // наибольшее
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i])
            max = arr[i];
    }
    return max;
}

function minNum(arr){ // наименьшее
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(min > arr[i] )
            min = arr[i];
    }
    return min;
}

function operations(arr, delimiter){ //функция выбор операций, принимает массив и разделитель
    let action = +prompt("select operation:1,2,3\n1.Sort (отсортировать по возрастанию/убыванию)\
    \n2.Even, not even (все четные/нечетные)\n3.Sum, average, max, min (сумма, среднее арефмитическое\
 число, наибольшее/наименьшее)");
    
    switch (action) {
        case 1: // отсортировать по возрастанию/убыванию
            // sortLeft(arr);
            arrSort(arr);
            console.log(arr.join(delimiter));//создаем строку из элементов arr, вставляя разделитель между ними.
            // sortRight(arr);
            arrSort(arr, true);
            console.log(arr.join(delimiter));
            break;
        case 2: // вывести все четные/нечетные
            // console.log(`Четные ${even(arr).join(delimiter)}`);
            // console.log(`Нечетные ${notEven(arr).join(delimiter)}`);
            console.log(`Even ${evenOdd(arr).join(delimiter)}`); // четные
            console.log(`Odd ${evenOdd(arr, true).join(delimiter)}`); // нечетные
            break;
        case 3: // вывести сумму всех чисел, среднее арефмитическое число, наибольшее/наименьшее
            console.log(`Сумма: ${sum(arr)}`);
            console.log(`Среднее: ${average(arr)}`);
            console.log(`Максимальное: ${maxNum(arr)}`);
            console.log(`Минимальное: ${minNum(arr)}`);
            break;
    
        default:
            console.log("there is no such operation (нет такой операции)");
            break;
    }
}

// Используя функции и методы массивов реализовываем следующий сценарий:

let mas; // массив
let reset; // для повторения сценария
let flag = true; // для выбора создать новый массив или нет
let delimiter; // для разделителя

do {
    if(flag){ // изначально flag === true, создаем массив и разделитель
        mas = arrGenerator();
        delimiter = prompt("come up with a separator (придумайте разделитель)");
    }
    
    operations(mas, delimiter);
    
    reset = confirm("want to repeat (хотите повторить)?");
    if(reset){
        if(confirm("want a new array Y/N (создать новый массив)?"))
            flag = true;
        else
            flag = false;
    }
} while (reset);


