const fruits = ['apple', 'banana', 'orange'];

// Вывод каждого элемента
fruits.forEach(function(fruit, index) {
    console.log(`${index + 1}. ${fruit}`);
});

// Использование стрелочной функции
fruits.forEach((fruit, index) => {
    console.log(`Фрукт ${index}: ${fruit}`);
});

// Результат:
// 1. apple
// 2. banana
// 3. orange
