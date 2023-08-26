let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

function copySorted(arr) {
    return arr.slice().sort();
}

console.log(sorted);
console.log(arr);