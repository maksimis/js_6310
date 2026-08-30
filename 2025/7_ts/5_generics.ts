interface User {}

interface Product {}

// Дженерик функция
function identity<T>(arg: T): T {
    return arg;
}

// Использование
let output1 = identity<string>("hello");
let output2 = identity<number>(42); // TypeScript может вывести тип

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

// Дженерик класс
class Repository<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }
    
    getById(id: number): T | undefined {
        return this.items.find(item => (item as any).id === id);
    }
}

// Использование
const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: "Alice" });
