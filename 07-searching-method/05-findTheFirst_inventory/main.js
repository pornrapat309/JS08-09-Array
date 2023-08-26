const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

const result = inventory.find(function (item) {
    if (item.name === 'cherries') {
        return true
    }
});

console.log(result);