const { calculator } = require('../modules/calculator');

it('adds', () => {
	expect(calculator.add(25, 39)).toBe(64);
});

it('subtracts', () => {
	expect(calculator.subtract(50, 15)).toBe(35);
});

it('multiplies', () => {
	expect(calculator.multiply(4, 11)).toBe(44);
});

it('divides', () => {
	expect(calculator.divide(20, 2)).toBe(10);
});

it('can add and subtract at the same time', () => {
	expect(calculator.subtract(100, 50, calculator.add(10, 15))).toBe(25);
});

it('can multiply and divide at the same time', () => {
	expect(calculator.multiply(2, 5, calculator.divide(100, 50))).toBe(20);
});
