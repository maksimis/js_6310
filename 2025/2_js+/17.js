const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Фильтрация четных чисел
const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6, 8, 10]
// Фильтрация по длине строки
const words = ['apple', 'banana', 'kiwi', 'orange', 'pear'];
const longWords = words.filter(word => word.length > 4);
console.log(longWords); // ['apple', 'banana', 'orange']