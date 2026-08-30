const book = {
    title: "JavaScript для чайников",
    author: "Джон Доу"
};

// Получение
console.log( book.title ); // "JavaScript для чайников"
console.log( book['author'] ); // "Джон Доу"

let key = 'title';
console.log( book[key] ); // "JavaScript для чайников" (работает!)
// Изменение
book.title = "Современный JavaScript";
// Добавление
book.pages = 345;
// Удаление
delete book.author;