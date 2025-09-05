// Function Expression
const sayHello = function(name) {
    return `Hello, ${name}`;
};

// Стрелочная функция (полный вариант)
const sayHelloAgain = (name) => {
    return `Hello again, ${name}`;
};

// Стрелочная функция (сокращенный вариант, если тело одно выражение)
const double = n => n * 2; // return подразумевается