const { caesarCipher } = require('../modules/caesarCipher');

it('works with bender', () => {
	expect(caesarCipher('bender', 5)).toBe('gjsijw');
});

it("works with Bender's full name", () => {
	expect(caesarCipher('Bender Bending Rodriguez', 20)).toBe(
		'Vyhxyl Vyhxcha Lixlcaoyt'
	);
});

it('converts shifts that are too large', () => {
	expect(caesarCipher('I HOPE THIS WRAPS AROUND CORRECTLY', 150)).toBe(
		'C BIJY NBCM QLUJM ULIOHX WILLYWNFS'
	);
});

it('works with symbols and numbers', () => {
	expect(caesarCipher('abc1234590-=;,.}[]', 12)).toBe('mno1234590-=;,.}[]');
});

it('works with negative shifts', () => {
	expect(caesarCipher('wE aRe gOiNg BaCk iN tImE!!!11!!', -76)).toBe(
		'yG cTg iQkPi DcEm kP vKoG!!!11!!'
	);
});
