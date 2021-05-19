function calc(n){
    const num = n;
    let copy = num;
    return{
        getNum: () => num,
        add: (a) => copy += a,
        sub: (a) => copy -= a,
        div: (a) => copy /= a,
        mult: (a) => copy *= a,
        getResult: () => copy
    };
}

let test = calc(4);

console.log(test.getNum());

test.add(33);
test.sub(12);
test.div(2);
test.mult(4);

console.log(test.getResult());

console.log(test.getNum());
