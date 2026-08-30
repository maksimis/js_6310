const fruits = ['Яблоко', 'Апельсин', 'Слива']; // Создание

console.log( fruits[0] ); // 'Яблоко' (доступ по индексу)
console.log( fruits.length ); // 3 (длина массива)

fruits[2] = 'Груша'; // Изменение элемента
fruits[3] = 'Лимон'; // Добавление элемента

// В массиве могут быть элементы разных типов
const randomArray = [1, 'Hello', true, {name: 'Bob'}, null];