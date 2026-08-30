function doHomework(subject, callback) {
    console.log(`Начинаю делать лабу по ${subject}`);
    callback();
}
function finishedHomework() {
    console.log('Закончил делать домашку');
}

doHomework('js', finishedHomework);
// Асинхронный callback
document.getElementById('button').addEventListener('click', function() {
    console.log('Кнопка нажата!');});