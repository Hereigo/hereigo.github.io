console.log('11111');
setTimeout(() => {
    console.log('22222');
}, 2000)
console.log('33333');

const numbers = [1, 2, 3, 4, 5];

// REDUCE - into Accumulated result.

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
// 0 <-- The Accumulator's starting value

console.log('Numbers Sum =', sum);

// FIND (the first appropriate)

const firstBiggerThenThree = numbers.find((x) => {
    return x > 3;
});

console.log('The number > 3 =', firstBiggerThenThree);

fetch('https://api.chucknorris.io/jokes/random/') // <= Promise<Response>
    .then(response => {
        return response.json();
    })
    .then(jsonData => {
        console.log(jsonData.value);
    });
