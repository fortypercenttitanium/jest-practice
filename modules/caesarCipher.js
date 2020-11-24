exports.caesarCipher = function (string, shift) {
	return string
		.split('')
		.map((char) => convert(char, shift))
		.join('');

	function convert(char, shift) {
		// convert character to code
		const charCode = char.charCodeAt(0);
		// return symbols/numbers immediately
		if (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) {
			return char;
		}
		// fix shifts that are too large
		while (shift > 26) {
			shift -= 26;
		}
		while (shift < -26) {
			shift += 26;
		}
		// do initial shift
		const shifted = charCode + shift;
		// check if uppercase shifts fall outside the confines of the charCode limit
		if (charCode <= 90) {
			// invalid chars have already been filtered, this only catches uppercase letters
			return shifted > 90
				? String.fromCharCode(shifted - 26)
				: shifted < 65
				? String.fromCharCode(shifted + 26)
				: String.fromCharCode(shifted);
		} else {
			// else catches all remaining letters, which are valid lowercase
			return shifted > 122
				? String.fromCharCode(shifted - 26)
				: shifted < 97
				? String.fromCharCode(shifted + 26)
				: String.fromCharCode(shifted);
		}
	}
};
