function sum(a, b) {
    const result = a + b;
    return result; // Возвращаем результат
    console.log("Этот код не выполнится"); 
}

let total = sum(5, 3); // Результат работы функции записывается в total
console.log(total); // 8

// Более короткая запись
function multiply(a, b) {
    return a * b;
}
console.log( multiply(5, 3) ); // 15