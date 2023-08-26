function checkEmptyObj(obj) {
if (typeof obj !== 'object' || obj === null) {
    return false;
} 
for (const key in obj) {
        return false;
    }
    return true;
}

console.log(checkEmptyObj({}));
console.log(checkEmptyObj({name: '2', age: '3'}));