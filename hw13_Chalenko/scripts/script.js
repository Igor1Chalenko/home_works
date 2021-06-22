function Accordion(element){
    //console.dir(element.children);
    this.element = element;
    this.init = accordionInit;
    this.toggle = toggleItem;
    this.addBlock = addBlock;
    this.getOpenIndexes = getOpenIndexes;
    this.closeAll = closeAll;
    this.openAll = openAll;
    this._onItemClick = function(e){ // e eventObject
       //console.dir(e.target); // через target.parentElement добираемся до родителя h3 т.е. li 
       e.target.parentElement.classList.toggle('extended'); // добавляем или / убираем класс
    };
    this.element.addEventListener('click', this._onItemClick.bind(this));// событие клика по родителю всего Accordion
}

function accordionInit(){
    // element.children.forEach(e => {}) // children: HTMLCollection, метод forEch у HTMLCollection отсутствует;
    // поэтому нужно использовать метод массива, взять его у Array.prototype
    // первый аргумент контекст, второй аргумент тот что передается в forEach при его вызове
    Array.prototype.forEach.call(this.element.children, e =>{
        e.classList.add('accordion-item'); // добави класс на элемен списка li, 
        e.children[0].classList.add('title'); // внутри каждой li два элемента
        e.children[1].classList.add('content');
    });
}

function toggleItem(index){ // добавить / убрать класс
    // Если класс у элемента отсутствует - добавляет, иначе - убирает.
    //Когда вторым параметром передано false - удаляет указанный класс, а если true - добавляет.
    this.element.children[index].classList.toggle('extended');
}

function addBlock(title, text){
    //insertAdjacentHTML() разбирает указанный текст как HTML или XML и вставляет полученные узлы
    //(nodes) в DOM дерево в указанную позицию.
    this.element.insertAdjacentHTML('beforeend', `<li class="accordion-item">
    <h3 class="title">${title}</h3><p class="content">${text}</p></li>`);
}

function getOpenIndexes(){ // возвращает массив индексов открытых блоков
    let arr = [];
    let couterIndex = 0; // счетчик итераций
    Array.prototype.forEach.call(this.element.children, e=>{
        if(e.classList[1] === 'extended') // если блок открыт
            arr.push(couterIndex); // кидаем в массив номер итерации
        couterIndex++;
    });
    return arr;
}

function closeAll(){
    Array.prototype.forEach.call(this.element.children, e=>{
        if(e.classList[1] === 'extended') // если блок открыт
            e.classList.remove('extended');
    });
}

function openAll(){
    Array.prototype.forEach.call(this.element.children, e=>{
        if(e.classList[1] !== 'extended') // если блок закрыт
            e.classList.add('extended');
    });
}

const mainAccordion = new Accordion(document.getElementById('accordion'));
mainAccordion.init();

mainAccordion.addBlock('Hello', 'World');

mainAccordion.toggle(0);



