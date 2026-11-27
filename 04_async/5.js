const promise = new Promise((resolve, reject) => {
    // Асинхронная операция
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve('Данные успешно получены');
        } else {
            // в reject передаём Error: у него есть message и стек вызовов
            reject(new Error('Ошибка загрузки данных'));
        }
    }, 1000);
});

// Получаем результат: then — успех, catch — ошибка
promise
    .then(result => console.log('Успех:', result))
    .catch(error => console.error('Ошибка:', error.message));
