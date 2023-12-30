// OBJECTS & INHERITANCE :

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

// MERGE(ASSIGN.OBJECT) , OBJECT.SEAL , OBJECT.FREEZE :

const mergedPerson = Object.assign(parent, child);
// the same using SPREAD operator
const mergedPerson1 = { ...parent, ...child };
// second has overriden the same fields of first.
console.log(mergedPerson1);     // { name: 'Deniz', age: 50, hobby: 'Toys' }

const sealed = Object.seal(mergedPerson);
sealed.name = 'Scorpio';
sealed.weapon = 'harpoon';      // useless - Sealed can't add New Fields!
console.log(sealed);            // { name: 'Scorpio', age: 50, hobby: 'Toys' }

Object.freeze(mergedPerson);
mergedPerson.name = 'Sub-Zero'; // useless - object frozen
mergedPerson.weapon = 'sword';  // useless - object frozen
console.log(mergedPerson);      // { name: 'Scorpio', age: 50, hobby: 'Toys' }

// SEE ALL HIDDEN PROPERTIES WITH SUB-PROPERTIES:

const util = require('util');
let x = {};
console.log(util.inspect(Object.getPrototypeOf(x), { showHidden: true, depth: null }));
// the same:
console.log(util.inspect(x.__proto__, { showHidden: true, depth: null }));

let arr = [];
console.log(arr.__proto__ === Array.prototype);             // true
console.log(arr.__proto__.__proto__ === Object.prototype);  // true
console.log(Array.prototype.isPrototypeOf(arr));            // true
console.log(Object.prototype.isPrototypeOf(Array));         // true
console.log(arr instanceof Array);                          // true

// ================

function User(name) {
    this.name = name;
}
User.prototype.hello = function () {
    return `${this.name} says: Hello!`;
}
const user1 = new User('Bred');
console.log(user1.hello());

function Warrior(name) {
    User.call(this, name);  // use User's ctor!
}
Warrior.prototype.attack = function () {
    return `${this.name} attack with a sword.`
}
const warrior1 = new Warrior('Jack');
console.log(warrior1.attack());

// console.log(warrior1.hello()); - error!
// to use User's Methods :
Object.setPrototypeOf(Warrior.prototype, User.prototype);
console.log(warrior1.hello()); // not error
