class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Геттер (вызывается как user.fullName, без скобок!)
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    // Сеттер (вызывается при присваивании user.fullName = ...)
    set fullName(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ');
    }
    // Статический метод (вызывается через User.createGuest())
    static createGuest() {
        return new User("Гость", "Анонимный");
    }
}
// Использование
let user = new User("Иван", "Петров");
console.log( user.fullName ); // "Иван Петров" (работает геттер)
user.fullName = "Алексей Сидоров"; // Работает сеттер
console.log(user.firstName); // "Алексей"
let guest = User.createGuest(); // Вызов статического метода
console.log(guest.fullName); // "Гость Анонимный"