// arr.slice() == arr.slice(0)

// ["t","e","s","t"]
// [0, 1, 2 ,3]
// [ -4,-3,-2,-1]
['t', 'e', 's', 't'].slice(-2);
['t', 'e', 's', 't'].slice(-3);
['t', 'e', 's', 't'].slice(-4, -2);

// const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];

// const newArr = sports.slice(1,4)
// newArr

// const arr = [1,2,3,3,4]
// const n = 3

// arr.slice(0,n)
// arr.slice(0,1)

function first(arr, n) {
    return n == undefined || n == 1 ? arr[0] : arr.slice(0, n);
}

console.log(first([7, 9, 0, -2])); // 7
console.log(first([], 3)); // []
console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]