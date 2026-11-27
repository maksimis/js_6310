// Имитация запроса: ответ через ms миллисекунд
const delay = (ms, value, fail = false) =>
    new Promise((resolve, reject) =>
        setTimeout(() => (fail ? reject(new Error(value)) : resolve(value)), ms));

async function main() {
    // Параллельно: общее время ~ 300 мс, а не 100 + 200 + 300
    const [user, posts, likes] = await Promise.all([
        delay(100, 'user'),
        delay(200, 'posts'),
        delay(300, 'likes'),
    ]);
    console.log('all:', user, posts, likes);

    // allSettled — результат КАЖДОГО промиса, даже если часть упала
    const results = await Promise.allSettled([delay(100, 'ok'), delay(50, 'упал', true)]);
    console.log('allSettled:', results.map(r => r.status));   // ['fulfilled', 'rejected']

    // race — первый завершившийся; удобно для тайм-аута
    const fastest = await Promise.race([delay(300, 'медленный'), delay(100, 'быстрый')]);
    console.log('race:', fastest);

    // any — первый УСПЕШНЫЙ, ошибки игнорируются
    const firstOk = await Promise.any([delay(50, 'упал', true), delay(150, 'зеркало 2')]);
    console.log('any:', firstOk);
}

main();
