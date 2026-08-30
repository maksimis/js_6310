const button = document.querySelector('#myButton');

// Добавляем обработчик события
button.addEventListener('click', function(event) {
    console.log('Кнопка была нажата!');
    console.log(event); // Объект события
});

// Удаляем обработчик (нужно передать ту же функцию)
function handleClick() {
    console.log('Клик!');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);