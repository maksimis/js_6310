// Синхронный код
console.log('Начало');
console.log('Середина');
console.log('Конец');

// Асинхронный код
console.log('Начало');
setTimeout(() => console.log('Середина'), 1000);
console.log('Конец');