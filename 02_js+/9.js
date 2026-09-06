// Раньше мы создавали каждый объект вручную:
const user1 = { name: "Анна", age: 25, isAdmin: false };
const user2 = { name: "Борис", age: 30, isAdmin: true };
// Это неэффективно, если объектов много и у них одинаковая структура.

// Класс - это чертеж для создания пользователей:
class User { // Имя класса принято писать с большой буквы
    constructor(name, age, isAdmin = false) {
        // Конструктор вызывается при создании нового объекта (new User())
        // Он инициализирует свойства объекта
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }

    // Метод, который будет у всех объектов, созданных от этого класса
    greet() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
}

// Создание объектов (экземпляров класса) с помощью оператора new
const user3 = new User("Анна", 25); // isAdmin будет false по умолчанию
const user4 = new User("Борис", 30, true);

user3.greet(); // "Привет, меня зовут Анна"
user4.greet(); // "Привет, меня зовут Борис"

console.log(user3 instanceof User); // true (user3 создан от класса User)