
function first(arr,n) {
    return n == undefined || n == 1 ? arr[0] : arr.slice(0,n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3)); 
console.log(first([7, 9, 0, -2], 3));


