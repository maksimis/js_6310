const companies = ['Apple', 'Google'];

companies.push('Amazon', 'Microsoft'); 
// ['Apple', 'Google', 'Amazon', 'Microsoft']

let lastCompany = companies.pop(); // Удалили 'Microsoft'
console.log(lastCompany); // 'Microsoft'

let firstCompany = companies.shift(); // Удалили 'Apple'
console.log(firstCompany); // 'Apple'

companies.unshift('Tesla'); 
// ['Tesla', 'Google', 'Amazon']
