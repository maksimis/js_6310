// Базовые типы
let username: string = "John";
let age: number = 25;
let isStudent: boolean = true;
// Массивы
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
// Кортежи
let person: [string, number] = ["John", 30];
// Специальные типы
let randomValue: any = "Может быть чем угодно";
let uncertain: unknown = "Требует проверки типа";
let nothing: void = undefined;
let neverEnding: never; // Для функций, которые никогда не завершаются
// Вывод типов (type inference)
let inferredString = "Hello"; // TypeScript автоматически определяет тип string