// IMPORT MODULES under test here:
import { 
    addExclamationPoints
} from '../functions.js';

const { test, skip } = QUnit;

// test('this test should pass', (expect) => {
//     const expected = true;

//     const actual = myFunction();

//     expect.equal(actual, expected);
// });


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should return a string followed by bunny rabbit!!!', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);
})

test('this test should return !!!', (expect) => {
    const expected = '!!!';

    const actual = addExclamationPoints('');

    expect.equal(actual, expected);
})

test('this test should return a string followed by 1000!!!', (expect) => {
    const expected = '1000!!!';

    const actual = addExclamationPoints('1000');

    expect.equal(actual, expected);
})