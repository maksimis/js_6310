const elementToRemove = document.querySelector('#toRemove');

// Современный способ (ES6)
elementToRemove.remove();

// Старый способ
const parent = elementToRemove.parentElement;
parent.removeChild(elementToRemove);