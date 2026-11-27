// Деструктуризация объекта — так в React получают props
const user = { name: "Анна", age: 25, address: { city: "Казань" } };
const { name, age, role = "student" } = user;      // значение по умолчанию
const { address: { city } } = user;                 // вложенная
console.log(name, age, role, city);                 // Анна 25 student Казань

// Деструктуризация массива — так устроен useState
const [first, second, ...rest] = [10, 20, 30, 40];
console.log(first, second, rest);                   // 10 20 [30, 40]

// Spread — копия с изменениями (без мутации исходника)
const updated = { ...user, age: 26 };               // новый объект
const numbers = [3, 1, 2];
const withFour = [...numbers, 4];                   // новый массив
console.log(user.age, updated.age, withFour);       // 25 26 [3, 1, 2, 4]

// Rest-параметры — любое количество аргументов
function sum(...values) {
    return values.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3));                          // 6

// Неизменяемые методы ES2023: исходный массив не меняется
console.log(numbers.toSorted((a, b) => a - b));     // [1, 2, 3]
console.log(numbers);                               // [3, 1, 2]

// Стрелочная функция не имеет своего this
const counter = {
    count: 0,
    increment() { this.count++; },                  // метод: this === counter
    isCounter() { return this === counter; },       // true
    broken: () => this === counter,                 // false: у стрелки this внешний
};
counter.increment();
console.log(counter.count, counter.isCounter(), counter.broken()); // 1 true false
