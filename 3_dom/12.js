// Событие загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен!');
});

// События мыши
const div = document.querySelector('#myDiv');
div.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'red';
});
div.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// События клавиатуры
document.addEventListener('keydown', function(event) {
    console.log(`Нажата клавиша: ${event.key}`);
});
