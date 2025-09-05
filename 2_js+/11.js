// Базовый (родительский) класс
class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
}
// Наследник (дочерний класс)
class Cat extends Animal { // extends - наследует от Animal
    constructor(name, owner) {
        super(name); // super() - вызывает конструктор родителя (Animal)
        this.owner = owner;
    }
    meow() {
        console.log(`${this.name} говорит Мяу!`);
    }
    // Можно переопределить метод родителя
    run(speed) {
        super.run(speed * 2); // Используем часть логики родителя
        console.log("И делает это изящно!");
    }
}
// Использование
let myCat = new Cat("Барсик", "Мария");
myCat.meow(); // "Барсик говорит Мяу!" (собственный метод)
myCat.run(5); // "Барсик бежит со скоростью 10." (переопределенный метод)