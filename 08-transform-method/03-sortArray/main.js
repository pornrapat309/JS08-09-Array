const arr = [11, 17, 23, 13, 7, 19];

function compareNum(a,b) {
    if ( b > a) return 1;
    if ( b === a) return 0;
    if ( b < a) return -1;
}

arr.sort(compareNum);
console.log(arr);