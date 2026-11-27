// Способ 1 (современный): элемент удаляет сам себя
const first = document.querySelector('#toRemove');
first?.remove();

// Способ 2 (старый): удаление через родителя
const second = document.querySelector('#toRemoveOld');
second?.parentElement.removeChild(second);

// После удаления ссылка на узел остаётся — его можно вставить заново
if (first) document.body.append(first);
