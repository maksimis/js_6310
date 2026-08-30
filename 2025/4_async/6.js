// Простой GET-запрос
fetch('https://api.hh.ru/cors')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        return response.json(); // Парсим JSON
    })
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));
// POST-запрос с данными
fetch('https://api.hh.ru/cors', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'John', age: 30 })
})
.then(response => response.json())
.then(data => console.log(data));