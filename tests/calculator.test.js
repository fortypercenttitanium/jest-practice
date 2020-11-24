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
