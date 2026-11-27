interface User {
    id: number;
    name: string;
    email: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

// Дженерик функция
function identity<T>(arg: T): T {
    return arg;
}

// Использование
let output1 = identity<string>("hello");
let output2 = identity(42); // <number> можно не писать: TS выведет тип сам

// Дженерик интерфейс
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

// Использование
const userResponse: ApiResponse<User> = {
    data: { id: 1, name: "John", email: "john@example.com" },
    status: 200,
    message: "Success"
};

const productResponse: ApiResponse<Product> = {
    data: { id: 1, name: "Laptop", price: 999 },
    status: 200,
    message: "Success"
};

// Дженерик класс с ограничением: T обязан иметь id
class Repository<T extends { id: number }> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }
    
    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id); // без any: id есть у любого T
    }
}

// Использование
const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: "Alice", email: "alice@example.com" });
const alice = userRepo.getById(1); // тип: User | undefined

const productRepo = new Repository<Product>();
productRepo.add({ id: 1, name: "Laptop", price: 999 });
// new Repository<string>(); // Ошибка: у string нет поля id
