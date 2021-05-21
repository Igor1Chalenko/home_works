const inputEl = document.getElementById('in'); // текстовый инпут
const btnEl = document.getElementById('btn'); // кнопка
const listEl = document.getElementById('list'); // список <ol>

btnEl.onclick = function(){ // событие нажатия кнопки
    if(inputEl.value !== ""){ // проверка на пустую строку
        const listItem = document.createElement('li'); // создаем элемент li
        listItem.innerText = inputEl.value; // добавляем в li текст из инпута
        listEl.append(listItem); // Добавим в список <ol> элемент li
        inputEl.value = null; // чистим инпут
    }
}
