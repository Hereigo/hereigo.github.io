// INHERITANCE :
// ================================================

const parent = {
    name: 'Alexa',
    age: 50
};

const child = Object.create(parent);
child.name = 'Deniz';
child.hobby = 'Toys';

console.log(parent);    // { name: 'Alexa', age: 50 }
console.log(child);     // { name: 'Deniz', hobby: 'Toys' }
console.log(child.age); // 50

console.log(Object.keys(child));    // [ 'name', 'hobby' ]
console.log(Object.keys(parent));   // [ 'name', 'age' ]
console.log(Object.values(parent)); // [ 'Alexa', 50 ]

console.log(Object.entries(parent));// [[ 'name', 'Alexa' ], [ 'age', 50 ]]

// MERGE OBJECT using OBJECT.ASSIGN :
// ================================================

const mergedPerson = Object.assign(parent, child);

// The SAME using SPREAD Operator :
const mergedPerson1 = { ...parent, ...child };

console.log(mergedPerson1);  // { name: 'Deniz', age: 50, hobby: 'Toys' }
