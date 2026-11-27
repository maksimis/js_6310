// Utility types, keyof, as const, satisfies, never
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

// Utility types — новые типы из существующих
type UserUpdate = Partial<User>;                   // все поля необязательные
type PublicUser = Omit<User, "password">;          // без пароля
type UserPreview = Pick<User, "id" | "name">;      // только id и name
type UsersById = Record<number, PublicUser>;       // словарь id -> пользователь
type FormErrors = Partial<Record<keyof User, string>>; // как в useForm (тема 10)

const update: UserUpdate = { name: "Alice" };
const preview: UserPreview = { id: 1, name: "Alice" };
const usersById: UsersById = { 1: { id: 1, name: "Alice", email: "alice@example.com" } };
const errors: FormErrors = { email: "Некорректный email" };

// keyof — объединение имён полей: "id" | "name" | "email" | "password"
function getField<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const userName = getField(usersById[1]!, "name"); // string
// getField(usersById[1]!, "emial"); // Ошибка: такого поля нет

// as const — литеральные типы вместо string[]
const ROLES = ["admin", "user", "moderator"] as const;
type Role = (typeof ROLES)[number];                // "admin" | "user" | "moderator"

// satisfies — проверка формы без потери точного типа
const theme = {
    primary: "#058DC7",
    danger: "#c0392b",
} satisfies Record<string, string>;
theme.primary.toUpperCase();                       // ключ primary известен TS

// never — проверка, что обработаны ВСЕ варианты union
type Status = "loading" | "success" | "error";
function statusText(status: Status): string {
    switch (status) {
        case "loading": return "Загрузка...";
        case "success": return "Готово";
        case "error": return "Ошибка";
        default: {
            const unreachable: never = status;     // добавили статус и забыли case — ошибка
            return unreachable;
        }
    }
}

// Вместо enum (запрещён при erasableSyntaxOnly, который включает шаблон Vite):
// union литералов или объект as const
const Direction = { Up: "UP", Down: "DOWN" } as const;
type Direction = (typeof Direction)[keyof typeof Direction]; // "UP" | "DOWN"

