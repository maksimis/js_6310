const numbers = [1, 2, 3, 4, 5];

// Сумма всех элементов
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15

// Подсчет количества элементов
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count); // {apple: 3, banana: 2, orange: 1}

// Поиск максимального значения
const max = numbers.reduce((acc, num) => Math.max(acc, num), -Infinity);
console.log(max); // 5
