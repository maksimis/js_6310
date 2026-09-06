let globalVar = "Я глобальная"; // Глобальная область

function myFunction() {
    let localVar = "Я локальная"; // Локальная область
    console.log(globalVar); // OK
    console.log(localVar);  // OK
}

console.log(globalVar); // OK
// console.log(localVar); // ОШИБКА! localVar не видна снаружи
