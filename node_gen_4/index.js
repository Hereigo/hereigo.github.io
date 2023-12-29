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
// the same using SPREAD operator
const mergedPerson1 = { ...parent, ...child };

// Second has overriden the Same Fields of First.
console.log(mergedPerson1);  // { name: 'Deniz', age: 50, hobby: 'Toys' }

// OBJECT.FREEZE :
// ================================================

const frozen = Object.freeze(mergedPerson);
frozen.name = 'Sub-Zero';   // useless - object frozen
frozen.weapon = 'sword';    // useless - object frozen
console.log(frozen);        // { name: 'Deniz', age: 50, hobby: 'Toys' }

const sealed2 = Object.seal(parent);
sealed2.name = 'Sub-Zero';   // useless - object frozen
sealed2.weapon = 'sword';    // useless - object frozen
console.log(sealed2, ' - sealed');
