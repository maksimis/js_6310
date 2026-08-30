const promise = new Promise((resolve, reject) => {
    // Асинхронная операция
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve('Данные успешно получены');
        } else {
            reject('Ошибка загрузки данных');
        }
    }, 1000);
});
