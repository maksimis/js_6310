// setTimeout
const timeoutId = setTimeout(() => {
    console.log('Выполнится через 2 секунды');
}, 2000);

// setInterval
const intervalId = setInterval(() => {
    console.log('Выполняется каждую секунду');
}, 1000);

// Остановка таймеров
// clearTimeout(timeoutId);
// clearInterval(intervalId);