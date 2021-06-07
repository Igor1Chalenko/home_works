const itemInEl = document.getElementById('item-input'); 
const btnAddCaseEl = document.getElementById('add-case');
const listEl = document.getElementById('list');

// создание элемента списка с датой текстом кнопками
function addItem(text){
    let listItem = document.createElement('li');
    let labelItem = document.createElement('label');
    let checkItem = document.createElement('input');
    checkItem.type = 'checkbox';
    checkItem.classList.add('nes-checkbox');
    myDate = new Date();
    let spanDate = document.createElement('span');
    spanDate.innerText = `    ${myDate.getHours()}:${myDate.getMinutes()}`;
    let spanItem = document.createElement('span');
    spanItem.innerText = text;
    let btnCopyItem = document.createElement('button');
    btnCopyItem.innerText = 'copy';
    btnCopyItem.classList.add('nes-btn', 'is-success');
    let btnDelItem = document.createElement('button');
    btnDelItem.innerText = 'del';
    btnDelItem.classList.add('nes-btn', 'is-error');   
    labelItem.append(checkItem, spanItem, spanDate, btnCopyItem, btnDelItem);
    listItem.append(labelItem);
    return listItem;
}

// Добавление заметки
btnAddCaseEl.addEventListener('click', () => {
    if(!!itemInEl.value) // если инпут не пустой
        listEl.append(addItem(itemInEl.value)); // добавляем заметку
    itemInEl.value = ""}); // очищаем инпут

// удаление заметки
const onItemDelClick = evt => {
    if (evt.target.innerText === 'del') // если нажата кнопка del
        evt.target.parentElement.remove(); // то удажяем родителя кнопки, (li со всем содержимым)
};

// создание копии заметки
const onItemCopyClick = evt => {
    if (evt.target.innerText === 'copy'){ // если нажата кнопка copy
        let copyText = evt.target.parentElement.children[1].innerText; // достаем текст заметки из родителя кнопки, li span
        listEl.append(addItem(copyText)); // создаем новый элемент списка с текстом добытым выше
    }                                     // новое время заметки сделается автоматически при создании элемента списка
}

// зачеркивание при чекбоксе 
const onItemCheckbox = evt => {
    if(evt.target.parentElement.children[0].checked){ // если чекбокс checked
        evt.target.parentElement.children[1].classList.add('t-d'); // навешиваем класс с зачеркнутым текстом
    }
    else{
        evt.target.parentElement.children[1].classList.remove('t-d'); // удаляем класс с зачеркнутым текстом
    }
}

listEl.addEventListener('click', onItemDelClick);
listEl.addEventListener('click', onItemCopyClick);
listEl.addEventListener('change', onItemCheckbox);
