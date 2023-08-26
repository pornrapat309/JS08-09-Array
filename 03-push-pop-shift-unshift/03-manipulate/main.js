const animals = ['Dog', 'Cat', 'Rat'];

animals.push('Fish');
animals.unshift('Horse');
animals.push('Giraffe', 'Snake');
animals.shift('Horse');
animals.pop('Snake');
animals.shift('Dog');

console.log(animals);