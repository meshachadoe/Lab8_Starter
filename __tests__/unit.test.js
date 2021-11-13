// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber() Unit Tests
test('expects 858-123-3455 to be a valid phone number', () => {
    const phoneNumber = '858-123-3455';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
})

test('expects 023-413-0919 to be a valid phone number', () => {
    const phoneNumber = '023-413-0919';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
})

test('expects 1234567890 to be an invalid phone number', () => {
    const phoneNumber = '1234567890';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
})

test('expects adc-413-da12 to be an invalid phone number', () => {
    const phoneNumber = 'adc-413-da12';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
})

// isEmail() Unit Tests
test('expects test@example.com to be a valid email', () => {
    const email = 'test@example.com';
    expect(functions.isEmail(email)).toBe(true);
})

test('expects hellothere23@school.edu to be a valid email', () => {
    const email = 'hellothere23@school.edu';
    expect(functions.isEmail(email)).toBe(true);
})

test('expects ma@a-die.edu.edu to be an invalid email', () => {
    const email = 'ma@a-die.edu.edu';
    expect(functions.isEmail(email)).toBe(false);
})

test('expects hello.edu to be an invalid email', () => {
    const email = 'hello.edu';
    expect(functions.isEmail(email)).toBe(false);
})

// isStrongPassword() Unit Tests
test('expects Hello_1234 to be a strong password', () => {
    const password = 'Hello_1234';
    expect(functions.isStrongPassword(password)).toBe(true);
})

test('expects NoW4y1234H0me to be a strong password', () => {
    const password = 'NoW4y1234H0me';
    expect(functions.isStrongPassword(password)).toBe(true);
})

test('expects hi to not be a strong password', () => {
    const password = 'hi';
    expect(functions.isStrongPassword(password)).toBe(false);
})

test('expects 23hellothere23 to not be a strong password', () => {
    const password = '23hellothere23';
    expect(functions.isStrongPassword(password)).toBe(false);
})

// isDate() Unit Tests
test('expects 08/23/2009 to be a valid date', () => {
    const date = '08/23/2009';
    expect(functions.isDate(date)).toBe(true);
})

test('expects 09/01/1920 to be a valid date', () => {
    const date = '09/01/1920';
    expect(functions.isDate(date)).toBe(true);
})

test('expects 009/01/1000 to be an invalid date', () => {
    const date = '009/01/1000';
    expect(functions.isDate(date)).toBe(false);
})

test('expects 09292902 to be an invalid date', () => {
    const date = '09292902';
    expect(functions.isDate(date)).toBe(false);
})

// isHexColor() Unit Tests
test('expects #20DA09 to be a valid hex color', () => {
    const hexColor = '#20DA09';
    expect(functions.isHexColor(hexColor)).toBe(true);
})

test('expects #000900 to be a valid hex color', () => {
    const hexColor = '#000900';
    expect(functions.isHexColor(hexColor)).toBe(true);
})

test('expects 9aa09FF to be an invalid hex color', () => {
    const hexColor = '9aa09FF';
    expect(functions.isHexColor(hexColor)).toBe(false);
})

test('expects #__0fds to be an invalid hex color', () => {
    const hexColor = '#__0fds';
    expect(functions.isHexColor(hexColor)).toBe(false);
})
