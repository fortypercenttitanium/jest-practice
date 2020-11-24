const { capitalize } = require('../modules/capitalize');

it('capitalizes bender', () => {
	expect(capitalize('bender')).toBe('BENDER');
});

it("capitalizes bender's full name", () => {
	expect(capitalize('bender bending rodriguez')).toBe(
		'BENDER BENDING RODRIGUEZ'
	);
});

it('works with mixed cases', () => {
	expect(capitalize('the quick BrOwn fox juMpS over tHe laZy DOg')).toBe(
		'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'
	);
});

it('works with already capitalized letters', () => {
	expect(capitalize('ABC')).toBe('ABC');
});

it('returns numbers and symbols as they are', () => {
	expect(capitalize('123.,:;')).toBe('123.,:;');
});
