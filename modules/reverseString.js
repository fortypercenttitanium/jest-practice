exports.reverseString = function (string) {
	const arr = [];
	string.split('').forEach((letter) => {
		arr.unshift(letter);
	});
	return arr.join('');
};
