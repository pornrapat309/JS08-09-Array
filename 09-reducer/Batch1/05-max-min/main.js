let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

const result = arr.reduce((acc, item) => {
    if (item > acc.max) {
        acc.max = item;
    }
    if (item < acc.min) {
        acc.min = item;
    }
    return acc;

}, {max: arr[0], min: arr[0]})

console.log(`Max = ${result.max}, Min = ${result.min}`);