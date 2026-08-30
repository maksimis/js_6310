// Новый способ с async/await

async function loadData() {
    try {
        const response = await fetch('https://api.hh.ru/cors');
        if (!response.ok) {
            throw new Error('Ошибка HTTP: ' + response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Не удалось загрузить данные:', error);
    } finally {
        console.log('Запрос завершен');
    }
}


loadData();