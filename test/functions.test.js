// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply
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

test('this test should return 4 * 12 / 2', (expect) => {
    const expected = 4 * 12 / 2;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});

test('this test should return 5 * 12 / 2', (expect) => {
    const expected = 5 * 12 / 2;

    const actual = multiplyBy12ThenHalve(5);

    expect.equal(actual, expected);
});

test('this test should return -10 * 12 / 2', (expect) => {
    const expected = -10 * 12 / 2;

    const actual = multiplyBy12ThenHalve(-10);

    expect.equal(actual, expected);
});

test('this test should return 8 / 4 * 5', (expect) => {
    const expected = 8 / 4 * 5;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected)
})

test('this test should return 0 / 4 * 5', (expect) => {
    const expected = 0 / 4 * 5;

    const actual = divideThenMultiply(0, 4, 5);

    expect.equal(actual, expected)
})

test('this test should return 8 / 0 * 5', (expect) => {
    const expected = 8 / 0 * 5;

    const actual = divideThenMultiply(8, 0, 5);
    console.log(actual);
    expect.equal(actual, expected)
})