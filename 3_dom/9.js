// Создаем новый элемент
const newDiv = document.createElement('div');
newDiv.textContent = 'Новый div';
newDiv.classList.add('box');

// Добавляем в конец body
document.body.appendChild(newDiv);

// Вставляем перед существующим элементом
const existingElement = document.querySelector('#existing');
document.body.insertBefore(newDiv, existingElement);

// Клонируем элемент
const clonedDiv = newDiv.cloneNode(true);
document.body.appendChild(clonedDiv);