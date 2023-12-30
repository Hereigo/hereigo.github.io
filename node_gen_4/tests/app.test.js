import { assert, expect, should } from 'chai';
import { describe, it } from 'mocha';

// describe('when', () => {
//     it('should', () => {
//         expect();
//         should();
//         assert();
//     })
// });

// package.json : "scripts": { "test": "mocha tests/app.test.js" }

// Run: npm test

import { calcArea, calcPerimeter, isSquare } from '../src/app.js';

describe('Testing the Geomentry functions.', function () {
    it('1. Calculate the area of the rectangle.', function (done) {
        expect(calcArea(3, 4)).to.equal(12);
        done();
    });
    it('2. Calculate the perimeter of the rectangle.', function (done) {
        expect(calcPerimeter(5, 7)).to.equal(24);
        done();
    });
    it('3. Check if rectangle is square.', function (done) {
        expect(isSquare(6, 6)).to.be.true;
        expect(isSquare(6, 7)).to.be.false;
        done();
    });
});