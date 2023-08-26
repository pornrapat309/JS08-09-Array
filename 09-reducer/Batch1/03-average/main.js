const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
];

// AVG by Weight =  SUM ( score * weight ) / SUM (weight)
// (90*0.2 + 95*0.3 + 85*0.5) / (0.2+0.3+0.5)

// #1 finalValue == (90*0.2 + 95*0.3 + 85*0.5)
// #2 finalValue == {sum : 90*0.2 + 95*0.3 + 85*0.5, totalW: (0.2+0.3+0.5)}

const scoreAverage = scores.reduce((acc, item) => acc + (item.score * item.weight),0)
console.log(scoreAverage);
// console.log(totalSum / 1);


//  const intitial = { sum: 0, total: 0};

// acc = {sum:....,total:....}
// cur = { score:...., subject:...., weight:....},

//  const scoreAverage2 = scores.reduce((a, c) => {
//     a.sum += c.score * c.weight  // (score * weight)
//     a.total += c.weight  // (weight)
//     return a;
// },intitial)
// console.log(scoreAverage2);
// console.log(scoreAverage2.sum / scoreAverage2.total);