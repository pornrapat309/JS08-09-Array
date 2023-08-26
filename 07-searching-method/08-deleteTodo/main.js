const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
];

function deleleteTask(id) {
    const deleteIndex = tasks.findIndex(obj => obj.id == id) 

    if (deleteIndex != -1) {
        delete tasks[deleteIndex]
    };
};

deleleteTask(1);

console.log(tasks);