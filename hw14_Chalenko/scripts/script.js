
function Burger(size){ // родитель всех бургеров
    
    //this.getPrice = function(){return this.price;}; // 1 вариант добавить метод
    
    this.toppings = []; // массив добавок
    
    this.properties = {
        [Burger.SIZES.small]: { // [Burger.SIZES.small]: комбинированный ключ
            price: 50,
            calories: 150
        },
        [Burger.SIZES.medium]: {
            price: 75,
            calories: 200
        },
        [Burger.SIZES.extra]: {
            price: 90,
            calories: 400
        }
    };
    
    // если в конструктор Burger, будет передано не small, madium, extra то в цену и калории запишется undefined

    // this.price = this.properties[size].price;
    // this.calories = this.properties[size].calories;
    
    // оптимизация

    // если в конструктор Burger, будет передано не small, madium, extra то в цену и калории запишется 0
    // const sizeProp = this.properties[size];
    // this.price = sizeProp ? sizeProp.price : 0; // sizeProp приведется к boolean
    // this.calories = sizeProp ? sizeProp.calories : 0;
    // все это можно вынести в отдельный метод : _init(size);

    this._init(size);
}

Burger.TOPPINGS = { // добавили статическое свойство TOPPINGS на родительский класс, доступ только через Burger
    mayoo: {price: 10, calories: 100},
    cheese: {price: 15, calories: 90},
    free: {price: 5, calories: 80}
};

Burger.SIZES = { // добавили статическое свойство SIZES на родительский класс, доступ только через Burger
    small: 'small',
    medium : 'medium',
    extra: 'extra'
};

Burger.prototype._init = function(size){ // методы начинающиеся с '_' являются приватными
    const sizeProp = this.properties[size];
    this.price = sizeProp ? sizeProp.price : 0;
    this.calories = sizeProp ? sizeProp.calories : 0;
}

// расчет цены бургера + добавки
Burger.prototype.getPrice = function(){ // 2 вариант добавить метод
    //способ 1
    // let toppingsPrice = 0;
    // this.toppings.forEach(e => {
    //     toppingsPrice += e.price;
    // });
    // return this.price + toppingsPrice;

    //способ 2
    return this.price + this.toppings.reduce((acc, e) => acc + e.price, 0);
} 

// расчет калорий бургера + добавками
Burger.prototype.getCal = function(){
    return this.calories + this.toppings.reduce((acc, e) => acc + e.calories, 0);
};

// добавление добавок в бургер
Burger.prototype.addTopping = function(topping){
    this.toppings.push(topping);
}


function CrabsBurger(size){
    this.properties = {
        [Burger.SIZES.small]: {
            price: 80,
            calories: 175
        },
        [Burger.SIZES.medium]: {
            price: 95,
            calories: 240
        },
        [Burger.SIZES.extra]: {
            price: 130,
            calories: 450
        }
    };

   this._init(size);
}
CrabsBurger.prototype = new Burger();

function FishBurger(size){
    this.properties = {
        [Burger.SIZES.small]: { 
            price: 75,
            calories: 175
        },
        [Burger.SIZES.medium]: {
            price: 95,
            calories: 240
        },
        [Burger.SIZES.extra]: {
            price: 115,
            calories: 450
        }
    };

    this._init(size);
}
FishBurger.prototype = new Burger();


function CheeseBurger(size){
    this.properties = {
        [Burger.SIZES.small]: {
            price: 55,
            calories: 175
        },
        [Burger.SIZES.medium]: {
            price: 80,
            calories: 240
        },
        [Burger.SIZES.extra]: {
            price: 100,
            calories: 450
        }
    };

    this._init(size);
}
CheeseBurger.prototype = new Burger(); // наследуем свойства бургера


const burgerForMe = new CheeseBurger(Burger.SIZES.small); // создали чизбургер
burgerForMe.addTopping(Burger.TOPPINGS.cheese); // в массив toppings добавили обьект cheese: {price: 15, calories: 90},
burgerForMe.addTopping(Burger.TOPPINGS.cheese);
burgerForMe.addTopping(Burger.TOPPINGS.free); // в массив toppings добавили обьект free: {price: 5, calories: 80},

console.log('CheeseBurger');
console.log(`price ${burgerForMe.getPrice()}`);
console.log(`calories ${burgerForMe.getCal()}`);

const burgerForMe2 = new CrabsBurger(Burger.SIZES.extra);
burgerForMe2.addTopping(Burger.TOPPINGS.mayoo);
burgerForMe2.addTopping(Burger.TOPPINGS.free);

console.log('CrabsBurger');
console.log(`price ${burgerForMe2.getPrice()}`);
console.log(`calories ${burgerForMe2.getCal()}`);
