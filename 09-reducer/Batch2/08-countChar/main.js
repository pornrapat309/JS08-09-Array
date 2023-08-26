let str = 'I live in Thailand';

const newStr = str.split('');
const result = newStr.reduce((acc,char) => {
    const lowerChar = char.toLowerCase();
    if (lowerChar !== ' ') {
        acc[lowerChar] = (acc[lowerChar] || 0) + 1;
    }
    return acc;
},{});

console.log(result);
