// Конструкция if...else
let age = 20;
if (age >= 18) {
    console.log("Добро пожаловать!");
} else {
    console.log("Вход запрещен!");
}

// Тернарный оператор
let message = (age >= 18) ? "Добро пожаловать!" : "Вход запрещен!";
console.log(message);

// else if
let time = 14;
if (time < 12) {
    console.log("Доброе утро!");
} else if (time < 18) {
    console.log("Добрый день!"); // Выполнится это
} else {
    console.log("Добрый вечер!");
}
