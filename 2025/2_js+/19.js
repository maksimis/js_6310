const products = [
    { name: 'Laptop', price: 1000, category: 'electronics' },
    { name: 'Phone', price: 500, category: 'electronics' },
    { name: 'Book', price: 20, category: 'education' },
    { name: 'Pen', price: 2, category: 'education' },
    { name: 'TV', price: 1500, category: 'electronics' }
];
// Цепочка методов: фильтрация -> преобразование -> сортировка
const expensiveElectronicProducts = products
    .filter(product => product.category === 'electronics')
    .filter(product => product.price > 600)
    .map(product => ({
        name: product.name.toUpperCase(),
        price: product.price * 1.2 // Добавляем НДС
    }))
    .sort((a, b) => b.price - a.price); // Сортировка по убыванию цены
console.log(expensiveElectronicProducts);
// [{name: 'TV', price: 1800}, {name: 'LAPTOP', price: 1200}]
