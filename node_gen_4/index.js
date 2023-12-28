// INHERITANCE :
// ================================================
const parent = {
    name: 'Alex',
    age: 50
};
const child = Object.create(parent);
child.name = 'Deniz';

console.log(parent);    // { name: 'Alex', age: 50 }
console.log(child);     // { name: 'Deniz' }
console.log(child.age); // 50

console.log(Object.keys(child));    // [ 'name' ]
console.log(Object.keys(parent));   // [ 'name', 'age' ]
console.log(Object.values(parent)); // [ 'Alex', 50 ]
console.log(Object.entries(parent));// [[ 'name', 'Alex' ], [ 'age', 50 ]]

// A
// ================================================
