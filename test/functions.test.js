// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem
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

    expect.equal(actual, expected);
});

test('this test should return 0 / 4 * 5', (expect) => {
    const expected = 0 / 4 * 5;

    const actual = divideThenMultiply(0, 4, 5);

    expect.equal(actual, expected);
});

test('this test should return 8 / 0 * 5', (expect) => {
    const expected = 8 / 0 * 5;

    const actual = divideThenMultiply(8, 0, 5);
    // console.log(actual);
    expect.equal(actual, expected);
});

test('this test should return inputs 8, 4, 5 as an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);
    console.log(actual);
    expect.deepEqual(actual, expected);
});

test('this test should return inputs 12, 7, 4 as an array', (expect) => {
    const expected = [12, 7, 4];

    const actual = returnAsAnArray(12, 7, 4);
    console.log(actual);
    expect.deepEqual(actual, expected);
});

test('this test should return inputs 15, 1, 9 as an array', (expect) => {
    const expected = [15, 1, 9];

    const actual = returnAsAnArray(15, 1, 9);
    console.log(actual);
    expect.deepEqual(actual, expected);
});

test('this test should take 20, 5, 8 and return mushed as a string 2058', (expect) => {
    const expected = '2058';

    const actual = returnAsAString(20, 5, 8);

    expect.equal(actual, expected);
});

test('this test should take 40, 6, 7 and return mushed as a string 4067', (expect) => {
    const expected = '4067';

    const actual = returnAsAString(40, 6, 7);

    expect.equal(actual, expected);
});

test('this test should take 60, 8, -6 and return mushed as a string 608-6', (expect) => {
    const expected = '608-6';

    const actual = returnAsAString(60, 8, -6);

    expect.equal(actual, expected);
});

test('this test should tell you your lucky number for the day is 12', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected);
});

test('this test should tell you your lucky number for the day is 20', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 20.';

    const actual = makeLuckyGreeting(10, 10);

    expect.equal(actual, expected);
});

test('this test should tell you your lucky number for the day is 20.2', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 20.2.';

    const actual = makeLuckyGreeting(10, 10.2);

    expect.equal(actual, expected);
});

test('this test should return apple', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'bananas']);

    expect.equal(actual, expected);
});

test('this test should return 0', (expect) => {
    const expected = 0;

    const actual = getSecondItem([1, 0, 2]);

    expect.equal(actual, expected);
});

test('this test should return 37', (expect) => {
    const expected = '37';

    const actual = getSecondItem([20, 37, 5]);

    expect.equal(actual, expected);
});