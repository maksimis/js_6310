const fruits = ['Яблоко', 'Апельсин', 'Слива'];

// Классический for (если нужен индекс)
for (let i = 0; i < fruits.length; i++) {
    console.log( `${i}: ${fruits[i]}` );
}

// Современный for...of (если нужен только элемент)
for (let fruit of fruits) {
    console.log(fruit);
}
// 'Яблоко'
// 'Апельсин'
// 'Слива'
