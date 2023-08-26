const names = 'background-color'
const str = names.split('-');
const result = str[0] + str[1][0].toUpperCase() + str[1].slice(1);

console.log(result);