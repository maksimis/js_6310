const numbers = [1, 2, 3, 4, 5];

// Поиск первого четного числа
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// Проверка наличия хотя бы одного отрицательного числа
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // false

// Проверка, все ли числа положительные
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// Сортировка (мутирует исходный массив!)
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = [...unsorted].sort((a, b) => a - b); // Копируем массив перед сортировкой
console.log(sorted); // [1, 1, 2, 3, 4, 5, 6, 9]