// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven
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
});

test('this test should return !!!', (expect) => {
    const expected = '!!!';

    const actual = addExclamationPoints('');

    expect.equal(actual, expected);
});

test('this test should return a string followed by 1000!!!', (expect) => {
    const expected = '1000!!!';

    const actual = addExclamationPoints('1000');

    expect.equal(actual, expected);
});

test('this test should return 4 multiplied by 7', (expect) => {
    const expected = 4 * 7;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);
});

test('this test should return 5 multiplied by 7', (expect) => {
    const expected = 5 * 7;

    const actual = multiplyBySeven(5);

    expect.equal(actual, expected);
});

test('this test should return -10 multiplied by 7', (expect) => {
    const expected = -10 * 7;

    const actual = multiplyBySeven(-10);

    expect.equal(actual, expected);
});

