// Module:
// sould have "type":"module" in package.json

// using:
// import utils from './utils.js';
// const { add, substract } = utils; 
// or
// import { add, substract } from './utils.js';

export const add = (a, b) => {
    return a + b;
};

export const substract = (a, b) => a - b;

// To Single Action Export by Default:

export default { substract };