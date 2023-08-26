const arr = [-3, 2, 0, -7, 4, 6];

const newArr = arr.map(item => item ** 2);

function compareSquare(a,b) {
    if ( a > b) return 1;
    if ( a === b) return 0;
    if ( a < b) return -1;
}

newArr.sort(compareSquare);
console.log(newArr);