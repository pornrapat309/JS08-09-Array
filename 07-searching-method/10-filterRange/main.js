const nums = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
// filterRange(arr,4,8) => [4,5,6,7,8]

function filterRange(arr,lower,upper) {
    return arr.filter((n,index) => n >= lower && n <= upper);
}

console.log(filterRange(nums,4,8));