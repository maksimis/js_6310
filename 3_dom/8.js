const element = document.querySelector('#myElement');

// Прямое изменение стилей
element.style.color = 'red';
element.style.backgroundColor = '#eee';
element.style.fontSize = '20px';

// Через добавление класса (предпочтительнее)
element.classList.add('highlighted');

// В CSS будет определен стиль
// .highlighted { color: red; background-color: #eee; font-size: 20px; }
