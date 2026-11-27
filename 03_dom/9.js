// Создаем новый элемент
const newDiv = document.createElement('div');
newDiv.textContent = 'Новый div';
newDiv.classList.add('box');

// Добавляем в конец body
document.body.appendChild(newDiv);

// Вставляем перед существующим элементом.
// Узел может быть в DOM только в одном месте: insertBefore ПЕРЕМЕСТИТ newDiv,
// поэтому для вставки создаём отдельный элемент
const existingElement = document.querySelector('#existing');
const label = document.createElement('p');
label.textContent = 'Вставлен перед #existing';
document.body.insertBefore(label, existingElement);
// то же короче: existingElement.before(label)

// Современные методы: append / prepend / before / after
document.body.prepend(document.createElement('hr'));

// Клонируем элемент
const clonedDiv = newDiv.cloneNode(true);
document.body.appendChild(clonedDiv);
