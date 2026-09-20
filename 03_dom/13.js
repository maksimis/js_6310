const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    // Отменяем переход по ссылке
    event.preventDefault();
    
    console.log(`Тип события: ${event.type}`);
    console.log(`Целевой элемент: ${event.target}`);
    console.log(`Координаты: ${event.clientX}, ${event.clientY}`);
});
// Всплытие события
document.body.addEventListener('click', function() {
    console.log('Клик на body!');
});
