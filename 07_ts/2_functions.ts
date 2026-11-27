// Базовая функция с типами
function greet(name: string): string {
    return `Hello, ${name}!`;
}
// Функция с необязательными параметрами
function createUser(
    name: string, 
    age?: number, 
    isActive: boolean = true
): { name: string; age?: number; isActive: boolean } {
    // с exactOptionalPropertyTypes нельзя записать age: undefined —
    // добавляем поле, только если значение передали
    return age === undefined ? { name, isActive } : { name, age, isActive };
}
// Стрелочные функции
const multiply = (a: number, b: number): number => a * b;
// Перегрузка функций
function processInput(input: string): string;
function processInput(input: number): number;
function processInput(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    return input * 2;
}
