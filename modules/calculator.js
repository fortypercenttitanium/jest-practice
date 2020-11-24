exports.calculator = {
	add: function (...nums) {
		return nums.reduce((acc, val) => {
			return acc + val;
		});
	},
	subtract: function (...nums) {
		return nums.reduce((acc, val) => {
			return acc - val;
		});
	},
	multiply: function (...nums) {
		return nums.reduce((acc, val) => {
			return acc * val;
		});
	},
	divide: function (...nums) {
		return nums.reduce((acc, val) => {
			return acc / val;
		});
	},
};
