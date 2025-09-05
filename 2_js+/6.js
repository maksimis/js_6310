// Обычная функция
function multiply(a, b, c) {
    return a * b * c;
}
// Каррированная версия
function curriedMultiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }
}
// Вызов обычной функции
multiply(2, 3, 4); // 24
// Вызов каррированной (несколько вариантов)
curriedMultiply(2)(3)(4); // 24
const multiplyByTwo = curriedMultiply(2); // Специализированная функция
const multiplyByTwoAndThree = multiplyByTwo(3);
console.log( multiplyByTwoAndThree(4) ); // 24
console.log( multiplyByTwoAndThree(5) ); // 30 (2 * 3 * 5)
