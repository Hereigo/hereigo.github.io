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

// OBJECT.SEAL & OBJECT.FREEZE :
// ================================================
const sealed = Object.seal(mergedPerson);
sealed.name = 'Scorpio';
sealed.weapon = 'harpoon';  // useless - Sealed can't add New Fields!
console.log(sealed);        // { name: 'Scorpio', age: 50, hobby: 'Toys' }

Object.freeze(mergedPerson);
mergedPerson.name = 'Sub-Zero'; // useless - object frozen
mergedPerson.weapon = 'sword';  // useless - object frozen
console.log(mergedPerson);      // { name: 'Scorpio', age: 50, hobby: 'Toys' }


