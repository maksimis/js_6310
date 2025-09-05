const element = document.querySelector('#myElement');

// Работа с содержимым
element.textContent = 'Новый текст';
element.innerHTML = '<strong>Жирный</strong> текст';

// Работа с атрибутами
element.setAttribute('data-id', '123');
const id = element.getAttribute('data-id');

// Работа с классами
element.classList.add('new-class');
element.classList.remove('old-class');
element.classList.toggle('active'); // добавляет, если нет, иначе удаляет