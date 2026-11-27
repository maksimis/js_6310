// Строгое сравнение: всегда === и !==
console.log(5 == "5");   // true  — == приводит типы, отсюда сюрпризы
console.log(5 === "5");  // false — сравнивает и значение, и тип
console.log(0 == "");    // true  (!)
console.log(null == undefined); // true, но null === undefined — false

// typeof — узнать тип значения
console.log(typeof 42);        // "number"
console.log(typeof "текст");   // "string"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" — историческая ошибка языка

// Ложные (falsy) значения: false, 0, "", null, undefined, NaN — остальное truthy
const name = "";
console.log(name || "Гость");  // "Гость" — || заменяет ЛЮБОЕ ложное значение

// ?? заменяет только null и undefined
const count = 0;
console.log(count || 10);  // 10 — ноль потерялся!
console.log(count ?? 10);  // 0  — ноль сохранился

// ?. — безопасное обращение к свойству
const user = { profile: null };
console.log(user.profile?.city);      // undefined вместо ошибки
console.log(user.profile?.city ?? "Город не указан");

// Большие целые числа
console.log(Number.isSafeInteger(9007199254740993)); // false — точность потеряна
console.log(9007199254740992n + 1n);                 // 9007199254740993n — BigInt
