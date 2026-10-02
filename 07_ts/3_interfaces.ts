// Базовый интерфейс
interface User {
    readonly id: number; // Нельзя изменить после создания
    name: string;
    email: string;
    age?: number; // Необязательное свойство
}

// Использование интерфейса
const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};

// Наследование интерфейсов
interface Employee extends User {
    position: string;
    salary: number;
}

// Интерфейс для функций
interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = function(src, sub) {
    return src.includes(sub);
};
