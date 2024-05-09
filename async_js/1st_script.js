console.log('11111');
setTimeout(() => {
    console.log('22222');
}, 2000)
console.log('33333');

// Reduce - into Accumulated result.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
// 0 <-- Accum starting value

console.log('Numbers Sum =', sum);

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
