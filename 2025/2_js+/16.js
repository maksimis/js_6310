const numbers = [1, 2, 3, 4, 5];
// Умножение каждого элемента на 2
const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]
// Создание массива объектов
const users = ['Alice', 'Bob', 'Charlie'];
const userObjects = users.map((name, index) => {
    return { id: index + 1, name: name };
});
console.log(userObjects);
// [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, ...]
