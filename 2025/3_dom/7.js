const element = document.querySelector('#yui_patched');

// Работа с содержимым
element.textContent = 'Университет КАИ';
element.innerHTML = '<strong>Университет</strong> КАИ';

// Работа с атрибутами
element.setAttribute('data-id', '123');
const id = element.getAttribute('data-id');
console.log(id);

// Работа с классами
element.classList.add('new-class');
element.classList.remove('new-class');
element.classList.toggle('active'); // добавляет, если нет, иначе удаляет