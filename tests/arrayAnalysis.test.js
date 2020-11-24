const { arrayAnalysis } = require('../modules/arrayAnalysis');

it('works with a single number', () => {
	expect(arrayAnalysis([5])).toEqual({
		average: 5,
		min: 5,
		max: 5,
		length: 1,
	});
});

it('works with 2 numbers', () => {
	expect(arrayAnalysis([10, 30])).toEqual({
		average: 20,
		min: 10,
		max: 30,
		length: 2,
	});
});

it('works with 10 numbers including negatives', () => {
	expect(arrayAnalysis([1, 2, 3, 4, 5, 6, 7, 8, -9, -10])).toEqual({
		average: 1.7,
		min: -10,
		max: 8,
		length: 10,
	});
});
