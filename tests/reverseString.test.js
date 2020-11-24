const { reverseString } = require('../modules/reverseString');

it('reverses bender', () => {
	expect(reverseString('bender')).toBe('redneb');
});

it("reverses Bender's full name", () => {
	expect(reverseString('Bender Bending Rodriguez')).toBe(
		'zeugirdoR gnidneB redneB'
	);
});

it('works with numbers', () => {
	expect(reverseString('123456789')).toBe('987654321');
});

it('works with symbols', () => {
	expect(reverseString(',./;[]-=')).toBe('=-][;/.,');
});
