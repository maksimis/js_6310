function createCounter() {
    let count = 0; // Эта переменная - "приватная"
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log( counter() ); // 1
console.log( counter() ); // 2
// У нас нет прямого доступа к переменной count извне
