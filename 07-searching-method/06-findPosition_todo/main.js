const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
];

const result = tasks.findIndex(function (item) {
    if (item.id === 2) {
        return true
    }
});

console.log(result);