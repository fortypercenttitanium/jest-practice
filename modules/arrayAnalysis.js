exports.arrayAnalysis = function (array) {
	return {
		average: array.reduce((a, b) => a + b) / array.length,
		min: array.reduce((a, b) => (a < b ? a : b)),
		max: array.reduce((a, b) => (a > b ? a : b)),
		length: array.length,
	};
};
